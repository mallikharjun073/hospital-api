import  express from 'express';
import db from './config/mongoose.js'
import passport from './config/passport-jwt-strategy.js'
import indexRouter from "./routes/index.js"
import bodyParser from "body-parser";

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(passport.initialize());

// Use express router
app.use('/', indexRouter)

app.listen(port, function (error) {
    if (error) {
        console.log(`Error in running the Server. Error is : ${error}`);
        return;
    }
    console.log(`Server is up and running on the port: ${port}`);
})
