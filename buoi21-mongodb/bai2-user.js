const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/buoi21', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    age: Number,
    school: String
},{
    collection: 'User'
})

const UserModel = mongoose.model('User', UserSchema);

//tạo 5 bản ghi với nội dung bất kì
// UserModel.create({
//     username: 'Pham Minh Thanh',
//     password: 'thanhkid',
//     email: 'kid1412ubqn1@gmail.com',
//     age: 25,
//     school: 'PTIT'
// },{
//     username: 'An Van Linh',
//     password: '123456',
//     email: 'avl1997@gmail.com',
//     age: 23,
//     school: 'PTIT'
// },{
//     username: 'Pham Ngan Ha',
//     password: 'hangaoda',
//     email: 'hangan98@gmail.com',
//     age: 22,
//     school: 'NUCE'
// },{
//     username: 'Pham Minh Cong',
//     password: 'congminh96',
//     email: 'minhcong96@gmail.com',
//     age: 24,
//     school: 'HPU'
// },{
//     username: 'Pham Minh Giang',
//     password: 'gianglong',
//     email: 'minhgiang1996@gmail.com',
//     age: 28,
//     school: 'HMU'
// })
// .then(
//     console.log('Done')
// )
// .catch(err =>{
//     console.log(err);
// })

UserModel.find({
    username:'Pham Minh Thanh',
    password:'thanhkid'
})
.then(data =>{
    if(data.length === 0){
        console.log("Không tìm thấy dữ liệu");
    }
    else{
        console.log(data);
    }
    
})
.catch(err =>{
    console.log(err);
})
    