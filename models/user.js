const { Schema, model } = require('mongoose')

const friendSchema = new Schema(
    {
        friendId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
)

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            max_length: 50,
        },
        email: {
            type: String, 
            required: true,
            unique: true,
            max_length: 50,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            },
        ],
        friends: [friendSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
)

userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
})

const User = model('User', userSchema)

module.exports = User