const express= require('express');
const cors =require('cors');
const bodyParser=require('body-parser');
const config=require('./config');
const studentRoutes=require('./routes/student-routes');




const app=express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',studentRoutes.routes);




app.listen(config.port,()=>console.log(`App is running on url ${config.url}`));