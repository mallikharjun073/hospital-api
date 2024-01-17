import  express  from "express";
const indexRouter = express.Router();
import filteredReports  from '../controllers/status.js'
import Doctorsrouter from '../routes/doctors.js' 
import patientrouter from "./patients.js";
import passport from "../config/passport-jwt-strategy.js"
indexRouter.use('/doctors', Doctorsrouter)

indexRouter.use('/patients', patientrouter)

indexRouter.get('/reports/:status',passport.authenticate('jwt',{session:false}),filteredReports)


export default indexRouter;