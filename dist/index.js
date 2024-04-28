"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routing
// data modelling
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const app_1 = require("./app");
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("Todo api");
});
//create
app.post('/addUser', (req, res) => {
    const { email, name, password } = req.body;
    const user = (0, app_1.addUser)(name, email, password);
    res.status(400).json({ user });
});
app.post('/addTodo', (req, res) => {
    const { title, userId } = req.body;
    const todo = (0, app_1.addTodo)(title, userId);
    todo.then(data => {
        res.status(200).json({ todo });
    });
});
//read
app.get('/getTodo', (req, res) => {
    const { userId } = req.body;
    const todos = (0, app_1.getTodo)(userId);
    res.status(200).json({ todos });
});
//update
app.post('/updateTodo', (req, res) => {
    const { id, title } = req.body;
    const updatedTodo = (0, app_1.updateTodo)(id, title);
    updatedTodo.then((results) => {
        res.status(200).json({ results });
    }).catch(err => {
        res.json(err);
    });
});
//delete todo
app.delete('/deleteTodo', (req, res) => {
    const { id } = req.body;
    (0, app_1.deleteTodo)(id).then(data => {
        res.status(200).json(data);
    });
});
app.listen(port, () => {
    console.log("running");
});
