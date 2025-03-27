package me.dio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontendController {
    @RequestMapping(value = { "/", "/{path:[^\\.]*}" })
    public String redirect() {
        return "forward:/index.html"; // Serve o frontend na raiz e em todas as rotas não mapeadas
    }
}
