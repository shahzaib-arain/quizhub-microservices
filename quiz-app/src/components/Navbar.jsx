import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Quiz App
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/quizzes">Quizzes</Button>
                <Button color="inherit" component={Link} to="/questions">Questions</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;