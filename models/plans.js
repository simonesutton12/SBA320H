import mongoose from 'mongoose';

const { Schema } = mongoose;

const planSchema = new Schema({ 
    title: {
        type: String,
        required: true
    },              

    day: {
        type: String,
        required: true
    },  

    meals: [{ 

        type: Schema.Types.ObjectId,
        ref: 'Meal',
        required: true
    }], 

    createdAt: {
        type: Date,
        default: Date.now
    },      
    updatedAt: {
        type: Date,
        default: Date.now
    }   
});

const Plan = mongoose.model('Plan', planSchema);

export default Plan;
