import { Schema, model } from 'mongoose';


const UserSchema = new Schema({
    nome:  String,
    email: String,
    
    
});     

export default model('User',UserSchema);

