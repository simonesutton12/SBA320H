import mongoose from 'mongoose';

const { Schema } = mongoose;  // Schema constructor     

const mealSchema = new Schema({ // Schema for meals collection      

    title: {
        type: String,
        required: true  
    }
});

const Meal = mongoose.model('Meal', mealSchema);  // Model for meals collection

export default Meal;  // Export the Meal model 

