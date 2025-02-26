const express = require('express');
const app = express();
const port = 3000;

const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

app.use(express.json());

app.get('/api/data', (req, res) => {
    const param = parseInt(req.query.id);
    const item = data.find(d => d.id === param);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${3000}`);
});