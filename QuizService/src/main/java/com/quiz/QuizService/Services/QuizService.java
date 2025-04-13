package com.quiz.QuizService.Services;

import com.quiz.QuizService.Entities.QuizEntity;

import java.util.List;

public interface QuizService {
    QuizEntity add(QuizEntity quiz);
    List<QuizEntity> get();
    QuizEntity get(Long id);

    void delete(Long id);
    void deleteAll();
    QuizEntity update(Long id, QuizEntity updatedQuiz);



}
