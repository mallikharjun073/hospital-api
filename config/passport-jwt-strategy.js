import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import Doctor from '../models/doctor.js';

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'Alert1234'
}

passport.use(new JWTStrategy(opts, function (jwtPayload, done) {
    Doctor.findById(jwtPayload._id)
    .then(function (user) {
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    })
    .catch(function (error) {
        console.log('Error in finding the User from JWT')
        return done(error);
    });
}))


export default passport;
