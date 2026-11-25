const express = require('express');

const app = express();
app.use(express.json());

const notes = [];

app.post('/notes', (req, res) => {
    const note = req.body.note;

    if (!note || typeof note !== 'string') {
        return res.status(400).send('Please provide a valid note');
    }

    notes.push(note);
    res.send('Note added');
});

app.get('/notes', (req, res) => {
    res.json(notes);
});

if (require.main === module) {
    app.listen(3000, () => {
        console.log('Notes app running on port 3000');
    });
}

module.exports = app;
