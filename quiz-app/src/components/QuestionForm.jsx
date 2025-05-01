import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Paper, MenuItem } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { createQuestion, getQuestion, updateQuestion, getQuizzes } from '../services/api';

const QuestionForm = () => {
    const [question, setQuestion] = useState({
        question: '',
        quizId: ''
    });
    const [quizzes, setQuizzes] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const quizzesResponse = await getQuizzes();
                setQuizzes(quizzesResponse.data);
                
                if (id) {
                    const questionResponse = await getQuestion(id);
                    setQuestion(questionResponse.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        setQuestion({
            ...question,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await updateQuestion(id, question);
            } else {
                await createQuestion(question);
            }
            navigate('/questions');
        } catch (error) {
            console.error('Error saving question:', error);
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                    {id ? 'Edit Question' : 'Add Question'}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Question"
                        name="question"
                        value={question.question}
                        onChange={handleChange}
                        required
                        multiline
                        rows={4}
                    />
                    <TextField
                        select
                        fullWidth
                        margin="normal"
                        label="Quiz"
                        name="quizId"
                        value={question.quizId}
                        onChange={handleChange}
                        required
                    >
                        {quizzes.map((quiz) => (
                            <MenuItem key={quiz.id} value={quiz.id}>
                                {quiz.title}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Box sx={{ mt: 2 }}>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary"
                            sx={{ mr: 2 }}
                        >
                            {id ? 'Update' : 'Save'}
                        </Button>
                        <Button 
                            variant="outlined" 
                            onClick={() => navigate('/questions')}
                        >
                            Cancel
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
};

export default QuestionForm;