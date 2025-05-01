import React from 'react';
import { Routes, Route } from 'react-router-dom';
import QuestionList from '../components/QuestionList';
import QuestionForm from '../components/QuestionForm';

const Questions = () => {
    return (
        <Routes>
            <Route path="/" element={<QuestionList />} />
            <Route path="/new" element={<QuestionForm />} />
            <Route path="/:id" element={<QuestionForm />} />
        </Routes>
    );
};

export default Questions;