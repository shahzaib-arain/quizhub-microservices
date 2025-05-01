import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, Box, Typography } from '@mui/material';
import { Delete, Edit, Add } from '@mui/icons-material';
import { getQuestions, deleteQuestion } from '../services/api';
import { Link } from 'react-router-dom';

const QuestionList = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        loadQuestions();
    }, []);

    const loadQuestions = async () => {
        const response = await getQuestions();
        setQuestions(response.data);
    };

    const handleDelete = async (id) => {
        await deleteQuestion(id);
        loadQuestions();
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h4">Questions</Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    startIcon={<Add />}
                    component={Link}
                    to="/questions/new"
                >
                    Add Question
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Question</TableCell>
                            <TableCell>Quiz ID</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {questions.map((question) => (
                            <TableRow key={question.questionId}>
                                <TableCell>{question.questionId}</TableCell>
                                <TableCell>{question.question}</TableCell>
                                <TableCell>{question.quizId}</TableCell>
                                <TableCell>
                                    <IconButton 
                                        color="primary" 
                                        component={Link}
                                        to={`/questions/${question.questionId}`}
                                    >
                                        <Edit />
                                    </IconButton>
                                    <IconButton 
                                        color="error" 
                                        onClick={() => handleDelete(question.questionId)}
                                    >
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default QuestionList;