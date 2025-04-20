package com.question.QuestionService.Implementation;

import com.question.QuestionService.Entities.QuestionEntity;
import com.question.QuestionService.Repositories.QuestionRepository;
import com.question.QuestionService.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionImp implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public QuestionImp(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public QuestionEntity create(QuestionEntity question) {
        return questionRepository.save(question);
    }

    @Override
    public List<QuestionEntity> getAll() {
        return questionRepository.findAll();
    }

    @Override
    public QuestionEntity getByID(Long id) {
       return questionRepository.findById(id).orElseThrow(()->new RuntimeException("Quiz not found"));
    }

    @Override
    public void deleteQuestion(Long id) {
         questionRepository.deleteById(id);

    }

    @Override
    public QuestionEntity updateQuestion(Long id, QuestionEntity updatedQuestion) {
        QuestionEntity existingQuestion = questionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Question not found with ID: " + id));

        existingQuestion.setQuestion(updatedQuestion.getQuestion());

        return questionRepository.save(existingQuestion);
    }

    @Override
    public List<QuestionEntity> findQuestionsByQuizId(Long quizId) {
        return questionRepository.findByQuizId(quizId);
    }


}
