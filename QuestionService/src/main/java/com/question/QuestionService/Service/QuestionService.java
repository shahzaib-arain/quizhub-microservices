package com.question.QuestionService.Service;

import com.question.QuestionService.Entities.QuestionEntity;

import java.util.List;

public interface QuestionService {

    QuestionEntity create(QuestionEntity question);
    List<QuestionEntity> getAll();
    QuestionEntity getByID(Long id);
    void deleteQuestion(Long id);
    QuestionEntity updateQuestion(Long id,QuestionEntity question);

    List<QuestionEntity> findQuestionsByQuizId(Long quizId);
}
