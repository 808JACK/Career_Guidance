const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware'); // Import the proxy middleware

const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/dashboard', (req, res) => {
    res.send('<h1>Dashboard</h1><p>Welcome to the dashboard!</p>');
});


app.get('/career-guidance', (req, res) => {
    res.send('<h1>Career Guidance</h1><p>AI-driven career suggestions for you.</p>');
});


app.get('/courses', (req, res) => {
    res.send('<h1>Courses</h1><p>Browse and enroll in courses.</p>');
});


app.get('/forum', (req, res) => {
    res.send('<h1>Forum</h1><p>Join discussions and connect with peers.</p>');
});


app.get('/admin', (req, res) => {
    res.send('<h1>Admin Panel</h1><p>Manage users, content, and analytics.</p>');
});


app.use('/chat', createProxyMiddleware({
    target: 'http://localhost:5000', 
    changeOrigin: true,
    pathRewrite: {
        '^/chat': '', 
    },
}));


app.get('/api/courses', (req, res) => {
    
    db.query('SELECT * FROM Courses', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
