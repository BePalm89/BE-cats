const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const catSchema = new Schema(
    {
        name: { type: String, required: true },
        canBeAdoptedAlone: { type: Boolean, required: true },
        genre: { type: String, required: true },
        color: { type: String, required: true },
        description: { type: String },
        race: { type: String },
        dateOfBirth: { type: Date }
    }, 
    { 
        timestamps: true 
    }
);

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;