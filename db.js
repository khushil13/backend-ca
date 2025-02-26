const express = require('express');
const app = express();
const port = 4000;

const users = [
    { username: 'alice', email: 'alice@example.com' },
    { username: 'bob', email: 'bob@example.com' },
    { username: 'charlie', email: 'charlie@example.com' }
];

app.use(express.json());

app.get('/api/data', (req, res) => {
    const param = parseInt(req.query.id);
    const item = data.find(d => d.id === param);
    if (item) {
        res.json({ message: 'User found', userData: item });
    } else {
        res.status(404).json({ message: 'User not found', userData: null });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${4000}`);
});

