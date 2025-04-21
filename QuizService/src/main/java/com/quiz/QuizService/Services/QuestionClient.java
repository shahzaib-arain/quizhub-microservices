package com.quiz.QuizService.Services;

import com.quiz.QuizService.Entities.QuestionEntity;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

//@FeignClient(name = "question-service", url = "http://localhost:8082") // for single instance of Question service port only on 8082
@FeignClient(name = "question-service")//for multiple instances using load balancer
public interface QuestionClient {
    @GetMapping("/question/quiz/{quizId}")
    List<QuestionEntity> getQuestionOfQuiz(@PathVariable("quizId") Long quizId);
}
