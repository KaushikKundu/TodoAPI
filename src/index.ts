// routing
// data modelling
import express from 'express'
const router = express.Router();
const app = express();
const port = 3000

router.get('/', (req,res) => {
    res.send("Todo api");
})
//create
router.post('/add',(req,res)=>{
    
})
app.listen(port,() => {
    console.log("running");
})