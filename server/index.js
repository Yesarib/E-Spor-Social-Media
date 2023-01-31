import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js';


const app = express();

app.use('/posts',postRoutes)


app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));

app.use(cors());

const CONNECTION = 'mongodb+srv://yesari:142536@cluster0.t05auf2.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION,{ useNewUrlParser: true, useUnifiedTopology:true })
    .then(()=> app.listen(PORT,() => console.log(`Server running on : ${PORT}`)))
    .catch((err) => console.log(err));
mongoose.set('strictQuery', true);
