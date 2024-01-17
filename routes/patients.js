import express from 'express';
import passport from 'passport';
const patientrouter = express.Router();
import {patientReports,createReport, register} from '../controllers/patientController.js';


patientrouter.post('/register',passport.authenticate('jwt',{session:false}),register)
patientrouter.post('/:id/create_report',passport.authenticate('jwt',{session:false}),createReport)
patientrouter.get('/:id/all_reports',passport.authenticate('jwt',{session:false}),patientReports)

export default patientrouter;