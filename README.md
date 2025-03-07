# Spring Decola Tech 2025

Este projeto consiste em uma API RESTful desenvolvida em Java utilizando o Spring Boot, criada durante o Bootcamp Decola Tech 2025, promovido pela Digital Innovation One (DIO) em parceria com a Avanade. ([dio.me](https://www.dio.me/))

## Objetivo do Projeto

O objetivo principal deste projeto é aplicar os conhecimentos adquiridos durante o bootcamp, desenvolvendo uma API robusta e escalável com Spring Boot. A API foi projetada para gerenciar operações essenciais, como criação, leitura, atualização e exclusão (CRUD) de registros, garantindo eficiência e segurança.

## Tecnologias Utilizadas

- **Java 21**: Linguagem de programação utilizada para o desenvolvimento da aplicação.
- **Spring Boot**: Framework que simplifica a criação de aplicações Java baseadas em Spring.
- **Spring Data JPA**: Facilita a interação com bancos de dados relacionais.
- **Spring Web**: Suporte para criação de aplicações web, incluindo RESTful APIs.
- **Banco de Dados H2**: Utilizado para testes em memória durante o desenvolvimento.
- **Banco de Dados PostgreSQL no Railway**: Implementação para ambientes de produção.

## Como Executar o Projeto

1. **Clonar o Repositório**:

```bash
   git clone https://github.com/matheusmgs22/spring-decola-tech-2025.git
```

2. **Navegar até o Diretório do Projeto**:

```bash
    cd spring-decola-tech-2025
```
3. **Compilar e Executar a Aplicação**:

Utilize o Gradle para compilar e iniciar a aplicação:

```bash
    ./gradlew bootRun
```
A aplicação estará disponível em http://localhost:8080.


## Endpoints Disponíveis

A API oferece os seguintes endpoints para interação:

- `GET /api/entidade`: Lista todos os registros da entidade.
- `GET /api/entidade/{id}`: Obtém um registro específico pelo ID.
- `POST /api/entidade`: Cria um novo registro.
- `PUT /api/entidade/{id}`: Atualiza um registro existente.
- `DELETE /api/entidade/{id}`: Remove um registro pelo ID.

*Substitua "entidade" pelo nome real da entidade implementada.*

## Agradecimentos

Gostaria de agradecer à DIO.me e à Avanade pela oportunidade de participar deste bootcamp e por disponibilizarem todo o conteúdo valioso. A experiência tem sido extremamente enriquecedora para mim, não apenas no desenvolvimento de habilidades técnicas, mas também no crescimento pessoal e profissional.

Este projeto tem cunho educacional, sinta-se à vontade para utilizá-lo, adaptá-lo e explorá-lo para fins de aprendizado e desenvolvimento.


