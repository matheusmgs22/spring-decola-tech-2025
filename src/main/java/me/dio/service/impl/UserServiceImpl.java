package me.dio.service.impl;

import me.dio.domain.model.User;
import me.dio.domain.repository.UserRepository;
import me.dio.service.UserService;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).orElseThrow(NoSuchElementException::new);
    }

    @Override
    public User create(User userToCreate) {
        if (userRepository.existsByAccountNumber(userToCreate.getAccount().getNumber())) {
            throw new IllegalArgumentException("This Account number already exists.");
        }
        return userRepository.save(userToCreate);
    }

    @Override
    public User update(Long id, User userToUpdate) {
        User existingUser = this.findById(id);

        // Validação do número da conta
        if (userToUpdate.getAccount() != null &&
                !existingUser.getAccount().getNumber().equals(userToUpdate.getAccount().getNumber()) &&
                userRepository.existsByAccountNumber(userToUpdate.getAccount().getNumber())) {
            throw new IllegalArgumentException("This account number already exists.");
        }

        // Atualiza apenas os campos permitidos
        if (userToUpdate.getName() != null) {
            existingUser.setName(userToUpdate.getName());
        }

        if (userToUpdate.getAccount() != null) {
            if (userToUpdate.getAccount().getNumber() != null) {
                existingUser.getAccount().setNumber(userToUpdate.getAccount().getNumber());
            }
            if (userToUpdate.getAccount().getAgency() != null) {
                existingUser.getAccount().setAgency(userToUpdate.getAccount().getAgency());
            }
        }

        // Atualização parcial do cartão
        if (userToUpdate.getCard() != null) {
            if (userToUpdate.getCard().getNumber() != null) {
                existingUser.getCard().setNumber(userToUpdate.getCard().getNumber());
            }
            // if para atualizar o limite do cartão
            if (userToUpdate.getCard().getLimit() != null) {
                existingUser.getCard().setLimit(userToUpdate.getCard().getLimit());
            }
        }

        return userRepository.save(existingUser);
    }

    @Override
    public void delete(Long id) {
        User userToDelete = this.findById(id);
        userRepository.delete(userToDelete);
    }
}
