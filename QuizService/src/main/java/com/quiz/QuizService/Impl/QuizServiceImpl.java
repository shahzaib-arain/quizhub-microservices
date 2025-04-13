package com.quiz.QuizService.Impl;

import com.quiz.QuizService.Entities.QuizEntity;
import com.quiz.QuizService.Repositories.QuizRepository;
import com.quiz.QuizService.Services.QuizService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizServiceImpl implements QuizService {

    private QuizRepository quizRepository;
    private QuizEntity quiz;

    public QuizServiceImpl(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    @Override
    public QuizEntity add(QuizEntity quiz) {
        return quizRepository.save(quiz);
    }

    @Override
    public List<QuizEntity> get() {
        return quizRepository.findAll();
    }

    @Override
    public QuizEntity get(Long id) {
        return quizRepository.findById(id).orElseThrow(() -> new RuntimeException("Quiz not found"));
    }

    @Override
    public void delete(Long id) {
        quizRepository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        quizRepository.deleteAll();
    }
    @Override
    public QuizEntity update(Long id, QuizEntity updatedQuiz) {
        QuizEntity existingQuiz = quizRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Quiz not found with ID: " + id));

        // Update fields
        existingQuiz.setTitle(updatedQuiz.getTitle());
        // Add other fields if necessary

        return quizRepository.save(existingQuiz);
    }




}


