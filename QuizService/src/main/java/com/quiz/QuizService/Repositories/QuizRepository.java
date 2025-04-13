package com.quiz.QuizService.Repositories;

import com.quiz.QuizService.Entities.QuizEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<QuizEntity,Long> {

}
