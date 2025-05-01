import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { createQuiz, getQuiz, updateQuiz } from '../services/api';

const QuizForm = () => {
    const [quiz, setQuiz] = useState({
        title: ''
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            loadQuiz(id);
        }
    }, [id]);

    const loadQuiz = async (id) => {
        const response = await getQuiz(id);
        setQuiz(response.data);
    };

    const handleChange = (e) => {
        setQuiz({
            ...quiz,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateQuiz(id, quiz);
        } else {
            await createQuiz(quiz);
        }
        navigate('/quizzes');
    };

    return (
        <Box sx={{ p: 3 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                    {id ? 'Edit Quiz' : 'Add Quiz'}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Title"
                        name="title"
                        value={quiz.title}
                        onChange={handleChange}
                        required
                    />
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
                            onClick={() => navigate('/quizzes')}
                        >
                            Cancel
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
};

export default QuizForm;