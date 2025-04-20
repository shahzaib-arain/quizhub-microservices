package com.quiz.QuizService.Entities;

import java.io.Serializable;

public class QuestionEntity implements Serializable {

    private Long questionId;
    private String question;
    private Long quizId;

    // ✅ Default constructor is required
    public QuestionEntity() {}

    public QuestionEntity(Long questionId, String question, Long quizId) {
        this.questionId = questionId;
        this.question = question;
        this.quizId = quizId;
    }
    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public Long getQuizId() {
        return quizId;
    }

    public void setQuizId(Long quizId) {
        this.quizId = quizId;
    }
}
