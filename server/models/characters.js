const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    dungeon:
        { type: Schema.Types.ObjectId, ref: 'Dungeon' }




});

const Character = model('Character', characterSchema);

module.exports = Character;