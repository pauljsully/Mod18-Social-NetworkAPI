const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlenght: 280
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
  });

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// thoughtSchema.path('createdAt').get(function(value) {
//   return new Date(value).toLocaleString(); 
// });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
