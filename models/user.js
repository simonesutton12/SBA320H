import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({ 
    
    name: {
        type: String,
        required: true
    },              

    email: {
        type: String,
        required: true
    },  

    password: {
        type: String,
        required: true
    },  

    createdAt: {
        type: Date,
        default: Date.now
    },      
    updatedAt: {
        type: Date,
        default: Date.now
    }   
}); 

const User = mongoose.model('User', userSchema);

export default User;

userSchema.path('name').validate(function (value) {
    return value.length <= 100;
}, 'Name cannot be longer than 100 characters.');       

userSchema.path('email').validate(function (value) {
    return value.length <= 100;
}, 'Email cannot be longer than 100 characters.'); 

userSchema.path('password').validate(function (value) { 
    return value.length <= 100;
}, 'Password cannot be longer than 100 characters.');
