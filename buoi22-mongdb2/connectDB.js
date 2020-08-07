const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/buoi22', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    age: Number
},{
    collection: 'User'
})

const UserModel = mongoose.model('User', UserSchema);

//1. Tìm tất cả các bản ghi có tuổi lớn hơn 25 tuổi

// UserModel.find({
//     age: {$gt: 25}
// })
// .then(data =>{
//     console.log(data);
// })
// .catch(err =>{
//     console.log(err);
// })

//2. Tìm tất cả document có tuổi từ 20 đến 30 (gợi ý dùng and) 
// UserModel.find({
//     age: {
//         $gt: 19,
//         $lt: 31
//     }
// })
// .then(data =>{
//     console.log(data);
// })
// .catch(err =>{
//     console.log(err);
// })

//3. Chèn thêm 1 document mới

// UserModel.create({
//     username: 'Pham Minh Thanh A',
//     password: '123456',
//     age: {
//         numberInt: '24'
//     }   
// })
// .then(data =>{
//     console.log('DONE');
// })
// .catch(err =>{
//     console.log(err);
// })

//4. Hiển thị toàn bộ document

// UserModel.find({})
// .then(data =>{
//     console.log(data);
// })
// .catch(err =>{
//     console.log(err);
// })

//5. Tìm những người có address  ở HP
// UserModel.find({
//     address:'HP'
// })
// .then(data =>{
//     console.log(data);
// })
// .catch(err =>{
//     console.log(err);
// })

//6. Tìm tất cả bản ghi có tên là ta hoặc tuổi nhỏ hơn 30

// UserModel.find({
//     username: 'ta',
//     age:{
//         $lt: 30
//     }
// })
// .then(data =>{
//     if(data.length === 0){
//         console.log('Không tìm thấy đối tượng thỏa mãn.')
//     }
//     else{
//         console.log(data);
//     }
   
// })
// .catch(err =>{
//     console.log(err);
// })

// 7. Sắp xếp các document theo tuổi và theo tứ tự tăng dần

// UserModel.find({})
// .sort('age')
// .then(data =>{
//     console.log(data);
// })
// .catch(err =>{
//     console.log(err);
// })

// 8. Tìm tất cả bản ghi có tuổi lớn 20 và sắp xếp các document đó theo thứ tự giảm dần

// UserModel.find({
//     age : { $gt : 20}
// })
// .sort({age:-1})
// .then(data =>{
//     console.log(data);
// })
// .catch(err =>{
//     console.log(err);
// })

//9. In ra 5 phần tử đầu của document

// UserModel.find({})
// .limit(5)
// .then(data =>{
//     console.log(data);
// })
// .catch(err =>{
//     console.log(err);
// })

//10. In ra 3 document bắt đầu từ document thứ 5
// UserModel.find({})
// .skip(4)
// .limit(3)
// .then(data =>{
//     console.log(data);
// })
// .catch(err =>{
//     console.log(err);
// })

//11. In ra các document có tên là thanh hoặc có tuổi nhỏ hơn 30

// UserModel.find({
//     $or: [
//         {username : 'thanh'},
//         {age :{$lt: 30}}
//     ]
// })
// .then(data =>{
//     console.log(data);
// })
// .catch(err =>{
//     console.log(err);
// })

/*
12. Tìm người có _id:”5e54dfe448afde5434ca75b9”
và cập nhật người đó thành username là “Thai Ha”( tự tìm hiểu findbyIdAndUpdate) 
 */
// var id = '5e54dfe448afde5434ca75b9'; 
// var username = "Thai Ha"
// UserModel.findByIdAndUpdate(id,{ username: username},(err,docs) => {
//     if(err){
//         console.log("ERROR...");
//     }
//     else{
//         console.log("Updated User : ", docs); 
//     }
// })

/*
13. Tìm người có _id:”5e54dfd1ae8eac34d01da3bf” 
và cập nhật người đó thành username là “Bac Ho”( updateOne)	
*/

// UserModel.updateOne(
//     {
//         _id: "5e54dfd1ae8eac34d01da3bf"
//     },
//     {
//         username: "Bac Ho"
//     }
// )
// .then(console.log("DONE"))
// .catch(err => {
//     console.log(err);
// })

//14. Xóa người có _id:”5e54e012d276b72fd4246734” 

// UserModel.deleteOne({
//     _id:"5e54e012d276b72fd4246734" 
// })
// .then(
//     console.log("DONE")
// )
// .catch(err => {
//     console.log(err);
// })

//15.Tìm những người có cùng quê HP và cập nhật password của họ thành 1234

// UserModel.updateMany(
//     {
//         address: 'HP'
//     },
//     {
//         password: "1234"
//     }
// )
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// })

//16. Tìm những người có cùng quê HP và cập nhật tuổi của 1 người đầu tiên thành 1000


// UserModel.updateOne(
//     {
//         address: 'HP'
//     },
//     {
//         age: 1000
//     }
// )
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// })

//17. Tìm người đầu tiên có mật khẩu là 1234

UserModel.findOne({
    password: '1234'
})
.then(data =>{
    console.log(data);
})
.catch(err =>{
    console.log(err);
})