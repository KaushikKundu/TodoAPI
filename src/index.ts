// routing
// data modelling
import express from 'express'
const app = express();
const port = 3000
import { addUser, addTodo , getTodo, updateTodo, deleteTodo} from './app';
import { todo } from 'node:test';
app.use(express.json());
app.get('/', (req,res) => {
    res.send("Todo api");
})
//create
app.post('/addUser',(req,res)=>{
    const {email,name,password} = req.body;
    const user = addUser(name,email,password);
    res.status(400).json({user})
    
})
app.post('/addTodo',(req,res)=>{
    const {title,userId} = req.body;
    const todo = addTodo(title,userId);
    todo.then(data => {
        res.status(200).json({todo})
    })
})
//read
app.get('/getTodo', (req,res)=>{
    const {userId} = req.body;
    const todos = getTodo(userId);
    res.status(200).json({todos})
})
//update
app.post('/updateTodo',(req,res) => {
    const {id,title} = req.body;
    const updatedTodo = updateTodo(id,title);
    updatedTodo.then((results) => {

        res.status(200).json({results})
    }).catch(err => {
        res.json(err);
    })
})
//delete todo
app.delete('/deleteTodo',(req,res)=>{
    const {id} = req.body;
    deleteTodo(id).then(data => {
        res.status(200).json(data);
    })
})


app.listen(port,() => {
    console.log("running");
})