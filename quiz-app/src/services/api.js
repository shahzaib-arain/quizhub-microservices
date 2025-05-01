import axios from 'axios';

const API_BASE = "http://localhost:9092"; // API Gateway port

// Quiz endpoints
export const getQuizzes = async () => {
    return await axios.get(`${API_BASE}/quiz-service/quiz`);
};

export const getQuiz = async (id) => {
    return await axios.get(`${API_BASE}/quiz-service/quiz/${id}`);
};

export const createQuiz = async (quiz) => {
    return await axios.post(`${API_BASE}/quiz-service/quiz`, quiz);
};

export const updateQuiz = async (id, quiz) => {
    return await axios.put(`${API_BASE}/quiz-service/quiz/${id}`, quiz);
};

export const deleteQuiz = async (id) => {
    return await axios.delete(`${API_BASE}/quiz-service/quiz/${id}`);
};

// Question endpoints
export const getQuestions = async () => {
    return await axios.get(`${API_BASE}/question-service/question/all`);
};

export const getQuestion = async (id) => {
    return await axios.get(`${API_BASE}/question-service/question/${id}`);
};

export const getQuestionsByQuizId = async (quizId) => {
    return await axios.get(`${API_BASE}/question-service/question/quiz/${quizId}`);
};

export const createQuestion = async (question) => {
    return await axios.post(`${API_BASE}/question-service/question`, question);
};

export const updateQuestion = async (id, question) => {
    return await axios.put(`${API_BASE}/question-service/question/${id}`, question);
};

export const deleteQuestion = async (id) => {
    return await axios.delete(`${API_BASE}/question-service/question/${id}`);
};

// Add axios response interceptor for error handling
axios.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);