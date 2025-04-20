package com.quiz.QuizService.Impl;

import com.quiz.QuizService.Entities.QuizEntity;
import com.quiz.QuizService.Repositories.QuizRepository;
import com.quiz.QuizService.Services.QuestionClient;
import com.quiz.QuizService.Services.QuizService;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuizServiceImpl implements QuizService {

    private QuizRepository quizRepository;
    private QuestionClient questionClient;

    public QuizServiceImpl(QuizRepository quizRepository, QuestionClient questionClient) {
        this.quizRepository = quizRepository;
        this.questionClient = questionClient;
    }

    @Override
    public QuizEntity add(QuizEntity quiz) {
        return quizRepository.save(quiz);
    }

    @Override
    public List<QuizEntity> get() {
        List<QuizEntity> quizzes = quizRepository.findAll();

        return quizzes.stream().map(quiz -> {
            try {
                quiz.setQuestionEntity(questionClient.getQuestionOfQuiz(quiz.getId()));
            } catch (Exception e) {
                System.err.println("Failed to fetch questions for quiz ID " + quiz.getId());
                quiz.setQuestionEntity(Collections.emptyList()); // fallback
            }
            return quiz;
        }).collect(Collectors.toList());
    }

    @Override
    public QuizEntity get(Long id) {
        return quizRepository.findById(id)
                .map(quiz -> {
                    try {
                        quiz.setQuestionEntity(questionClient.getQuestionOfQuiz(quiz.getId()));
                    } catch (Exception e) {
                        System.err.println("Failed to fetch questions for quiz ID " + id);
                        quiz.setQuestionEntity(Collections.emptyList()); // fallback
                    }
                    return quiz;
                })
                .orElseThrow(() -> new RuntimeException("Quiz not found"));
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





