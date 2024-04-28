// routing
// data modelling
import express from 'express'
const app = express();
const port = 3000
import { addUser, addTodo , getTodo} from './app';
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
    console.log(todo)
    res.status(200).json({todo})
})
//read
app.get('/getTodo', (req,res)=>{
    const {userId} = req.body;
    const todos = getTodo(userId);
    res.status(200).json({todos})
})



app.listen(port,() => {
    console.log("running");
})