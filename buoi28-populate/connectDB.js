const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/buoi28',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Schema = mongoose.Schema;

PostSchema = new Schema({
    title: String,
    content: String,
    author:{
        type: String,
        ref: 'User'
    },
    comment:[{
        type: String,
        ref: 'Comment'
    }]
},{
    collection: 'Post'
})

UserSchema = new Schema({
    name: String,
    address: String
},{
    collection: 'User'
})

CommentSchema = new Schema({
    content: String,
    userComment: {
        type: String,
        ref: 'User'
    }
},{
    collection: 'Comment'
})


const UserModel = mongoose.model('User', UserSchema);
const PostModel = mongoose.model('Post', PostSchema);
const CommentModel = mongoose.model('Comment', CommentSchema);

PostModel.find({})
.populate({
    path: 'comment',
    populate:{
        path: 'userComment'
    }
})
.populate('author')
.then(data => {
    console.log(data)
})
.catch(err =>{
    console.log(err)
})