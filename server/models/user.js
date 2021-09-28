const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  dungeons: [{
    type: Schema.Types.ObjectId, ref: 'Dungeon'
  }]

  
  
});



const User = model('User', UserSchema);

module.exports = User;