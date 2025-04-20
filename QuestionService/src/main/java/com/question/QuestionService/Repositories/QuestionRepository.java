package com.question.QuestionService.Repositories;


import com.question.QuestionService.Entities.QuestionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<QuestionEntity,Long> {
    List<QuestionEntity> findByQuizId(Long quizId);
}
