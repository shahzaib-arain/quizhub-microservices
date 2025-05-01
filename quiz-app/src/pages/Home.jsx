import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Home = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom>
                    Welcome to Quiz App
                </Typography>
                <Typography variant="h5">
                    Manage your quizzes and questions with ease
                </Typography>
            </Paper>
        </Box>
    );
};

export default Home;