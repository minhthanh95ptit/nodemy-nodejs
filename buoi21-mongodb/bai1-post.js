const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/buoi21', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

//Bai 1: Collection Post 

const PostSchema = new Schema({
    content: String,
    title: String,
    comment: String
},{
    collection: 'Post'
})

const PostModel = mongoose.model('Post', PostSchema);


console.log("---Tạo 2 bản ghi mới---")

PostModel.create({
    content: '123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456',
    title: 'Viet Nam Vo Doi',
    comment: 'Hahaha qua dung luon'
},{
    content: 'Covid mười chín đã bị tiêu diệt ở hầu hết các tỉnh thành trên cả nước',
    title: 'Covid 19 dang bi tieu diet',
    comment: 'Hahaha qua dung luon day'
})
.then(
    console.log("DONE")
)
.catch(err =>{
    console.log(err);
})

console.log("---Tìm toàn bộ bài post---")
PostModel.find({})
.then(data =>{
    console.log(data);
})
.catch(err =>{
    console.log(err);
})

console.log("---In ra 1 bài post theo điều kiện id---")
PostModel.find({
    _id: "5f2c29913ddeca20c2fce2b2"
})
.then(data =>{
    console.log(data);
})
.catch(err =>{
    console.log(err);
})



console.log("---Cập nhật 1 giá trị của content theo 1 id---")
PostModel.updateMany({
    _id: "5f2c29913ddeca20c2fce2b2"
},{
    content: "Việt Nam vô đối là những câu chuyện dựa trên một số thói xấu của một số người trong xã hội để phên phán, châm biếm đả kích nhưng mang lại tiếng cười sảng "
})
.then(data =>{
    console.log(data);
})
.catch(err =>{
    console.log(err);
})