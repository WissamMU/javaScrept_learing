const { default: mongoose } = require("mongoose");

const ModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    // array 
    watchList: [{
        movie: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie"
        },
        watched: Boolean
    }],
    isAdmin: {
        type: Boolean,
        default: false
    }       

})

ModelSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
})


const Module = mongoose.model('User', ModelSchema)

module.exports = Module;