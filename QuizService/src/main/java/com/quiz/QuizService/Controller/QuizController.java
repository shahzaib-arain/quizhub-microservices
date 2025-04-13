package com.quiz.QuizService.Controller;

import com.quiz.QuizService.Entities.QuizEntity;
import com.quiz.QuizService.Services.QuizService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
public class QuizController {
    private QuizService quizService;


    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    //create
    @PostMapping
    public QuizEntity create(@RequestBody QuizEntity quiz){
        System.out.println("Received quiz: " + quiz); // Should print title
        return quizService.add(quiz);
    }


    @GetMapping
    public List<QuizEntity> get(){
        return quizService.get();
    }

    @GetMapping("/{id}")
    public QuizEntity getOne(@PathVariable Long id){
        return quizService.get(id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id){
         quizService.delete(id);
        return "Quiz with ID " + id + " has been deleted successfully.";
    }


    @DeleteMapping("/all")
    public String deleteAllQuizzes(){
        quizService.deleteAll();
        return "All quizzes have been deleted successfully.";
    }
    @PutMapping("/{id}")
    public QuizEntity updateQuiz(@PathVariable Long id, @RequestBody QuizEntity quiz) {
        return quizService.update(id, quiz);
    }


}
