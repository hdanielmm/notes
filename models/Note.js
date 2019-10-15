const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "User" 
  },
  title: { 
    type: String, 
    require: true 
  },
  body: String 
});
NoteSchema.methods.truncateBody = function() {
  if(this.body && this.body.length > 75) {
    return this.body.substring(0, 70) + " ...";
  }
  return this.body;
};

// Modelo
const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;