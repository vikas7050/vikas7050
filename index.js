import express from 'express';
import cors from 'cors'

const app = express();

// app.use(cors());
app.use(express.json())
// a=endpoint,
// after endpoint all other entities are middlewares => 
// app.get(a,b,c)
app.get('/hello', (req, res,next) => {
    console.log(req)

    res.header('Access-Control-Allow-Origin','*');
    res.header('X-middleware-example','true'); 

    if(typeof(req.query.hello) === 'number'){
        res.status(200).json({type:'string'})
    }else{

        next();
    }
    // if(req.query.hello )

    // res.status(200).json({ result: "Server working ocrrectly" })
},(req,res,next)=>{
    console.log(next)
    res.status(200).json({ result: "Server working ocrrectly" })
})


app.listen('5000', () => {
    console.log("Server running at port 5000")
})