import React from 'react';
import { Routes, Route } from 'react-router-dom';
import QuizList from '../components/QuizList';
import QuizForm from '../components/QuizForm';

const Quizzes = () => {
    return (
        <Routes>
            <Route path="/" element={<QuizList />} />
            <Route path="/new" element={<QuizForm />} />
            <Route path="/:id" element={<QuizForm />} />
        </Routes>
    );
};

export default Quizzes;