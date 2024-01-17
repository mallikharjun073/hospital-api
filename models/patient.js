import mongoose from 'mongoose';
const patientSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true,
  },
  reports:[
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reports',
    }
  ]
}, {
  timestamps: true
}
)

const Patient = mongoose.model('Patient', patientSchema);
export default  Patient;