const { Schema, model } = require('mongoose');

const dungeonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user:
        { type: Schema.Types.ObjectId, ref: 'User' },

    characters: [{
        type: Schema.Types.ObjectId, ref: 'Character'
    }]
        
    



});

const Dungeon = model('Dungeon', dungeonSchema);

module.exports = Dungeon;
