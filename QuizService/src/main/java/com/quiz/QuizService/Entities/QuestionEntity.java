package com.quiz.QuizService.Entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuestionEntity {
    private Long questionId;
    private String question;
    private Long quizId;
}
