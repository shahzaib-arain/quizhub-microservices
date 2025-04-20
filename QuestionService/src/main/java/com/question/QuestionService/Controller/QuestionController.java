package com.question.QuestionService.Controller;

import com.question.QuestionService.Entities.QuestionEntity;
import com.question.QuestionService.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping("/all")
    public List<QuestionEntity> getAll(){
        return questionService.getAll();
    }
    @GetMapping("/{id}")
    public QuestionEntity findById(@PathVariable Long id){
        return questionService.getByID(id);

    }
    @PostMapping
    public QuestionEntity add(@RequestBody QuestionEntity question){
        System.out.println("Received question: " + question); // Check what's being received
        return questionService.create(question);
    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable Long id){
         questionService.deleteQuestion(id);
         return "Question Deleted";

    }
   @PutMapping("/{id}")
    public QuestionEntity updateQuestion(@PathVariable Long id,QuestionEntity question){
        return questionService.updateQuestion(id,question);
   }

    @GetMapping("/quiz/{quizId}")
    public List<QuestionEntity> getAll(@PathVariable Long quizId){
        return questionService.findQuestionsByQuizId(quizId);
    }
}
