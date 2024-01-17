import express from "express";
const Doctorsrouter = express.Router();
import { create, createSession } from "../controllers/doctorController.js";


Doctorsrouter.post('/register',create)
Doctorsrouter.post('/login',createSession)

export default Doctorsrouter;