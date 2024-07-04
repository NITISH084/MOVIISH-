import express from "express";
import databaseconnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import router from "./routes/userrouter.js";
import cors from "cors";



databaseconnection();


  

const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cookieParser());
const allowedOrigins = [
    'http://localhost:5173', 
    'https://9qj4flxv-5173.inc1.devtunnels.ms/',
   
];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}

app.use(cors(corsOptions));


app.use("/api/v1/user",router)

const p=process.env.port ||3000;
app.listen(p,()=>{
    console.log(`http://localhost:${p}`);
});
 