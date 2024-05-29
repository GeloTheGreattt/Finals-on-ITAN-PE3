const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let students = [];

app.get('/students', (req, res) => {
    res.send(students);
});

app.post('/students', (req, res) => {
    const { id, name, age } = req.body;
    if (!id || !name || !age) {
        return res.status(400).send('Missing student details');
    }
    const newStudent = { id, name, age };
    students.push(newStudent);
    res.status(201).send(newStudent);
});



app.put('/students/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const studentIndex = students.findIndex(student => student.id === id);

    if (studentIndex === -1) {
        return res.status(404).send('Student not found');
    }

    if (name) students[studentIndex].name = name;
    if (age) students[studentIndex].age = age;

    res.send(students[studentIndex]);
});

app.delete('/students/:id', (req, res) => {
    const { id } = req.params;
    const studentIndex = students.findIndex(student => student.id === id);

    if (studentIndex === -1) {
        return res.status(404).send('Student not found');
    }

    const deletedStudent = students.splice(studentIndex, 1);
    res.send(deletedStudent[0]);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
