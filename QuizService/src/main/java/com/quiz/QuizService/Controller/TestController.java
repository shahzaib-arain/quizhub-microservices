package com.quiz.QuizService.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/quiz-test")
public class TestController {
    @GetMapping
    public String QuizTest(){
        return "Quiz-test path is running ";
    }

}
