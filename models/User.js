const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: [
            { type: Schema.Types.ObjectId, ref: 'Thought' },
        ],
        friends: [
            { type: Schema.Types.ObjectId, ref: 'User' },
        ],
    },

);

userSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
        return this.friends.length;
    })

const User = model('User', userSchema);

module.exports = User;



