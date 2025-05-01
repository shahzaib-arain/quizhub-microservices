import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, Box, Typography } from '@mui/material';
import { Delete, Edit, Add } from '@mui/icons-material';
import { getQuizzes, deleteQuiz } from '../services/api';
import { Link } from 'react-router-dom';

const QuizList = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        loadQuizzes();
    }, []);

    const loadQuizzes = async () => {
        const response = await getQuizzes();
        setQuizzes(response.data);
    };

    const handleDelete = async (id) => {
        await deleteQuiz(id);
        loadQuizzes();
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h4">Quizzes</Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    startIcon={<Add />}
                    component={Link}
                    to="/quizzes/new"
                >
                    Add Quiz
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {quizzes.map((quiz) => (
                            <TableRow key={quiz.id}>
                                <TableCell>{quiz.id}</TableCell>
                                <TableCell>{quiz.title}</TableCell>
                                <TableCell>
                                    <IconButton 
                                        color="primary" 
                                        component={Link}
                                        to={`/quizzes/${quiz.id}`}
                                    >
                                        <Edit />
                                    </IconButton>
                                    <IconButton 
                                        color="error" 
                                        onClick={() => handleDelete(quiz.id)}
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

export default QuizList;