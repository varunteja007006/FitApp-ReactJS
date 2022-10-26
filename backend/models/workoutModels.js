const mongoose = require("mongoose");

const Schema = mongoose.Schema


//Model to create a table in MongoDB
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)


// To get all collections from the model
//Workout.find()