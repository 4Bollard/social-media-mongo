const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        if (date) return date.toString();
      }
    },
    username: { 
      type: String,
      required: true
    },

    reactions: [
      reactionSchema
    ],
  },

);



const Thought = model('Thought', thoughtSchema);




module.exports = Thought;
