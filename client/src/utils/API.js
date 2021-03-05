import axios from "axios";
const API = {
    signup: function (userData) {
        console.log("triggered api");
        return axios.post("/api/users/signup", userData);
    },
    login: function (userData) {
        console.log("i login")
        return axios.post("/api/users/login", userData);
    },
    getUserData: function () {
        return axios.get("/api/users/user_data");
    },
    createYearbook: function (bookData) {
        return axios.post("/api/books", bookData);
    },
    getBooksByYear: function (year) {
        return axios.get("/api/books/year/" + year);
    },
}
export default API;
// // Export an object containing methods we'll use for accessing the random user API
// export default {

//     getClassById: function (id) {
//         return axios.get("/api/classes/" + id);
//     },
//     getClassByBook: function (book) {
//         return axios.get("/api/classes/book/" + book);
//     },
//     saveClass: function (classData) {
//         return axios.post("/api/classes", classData);
//     },
//     updateClass: function (id, classData) {
//         return axios.post("/api/classes" + id, classData);
//     },
//     getStudentById: function (id) {
//         return axios.get("/api/students/" + id);
//     },
//     getStudentByClass: function (classId) {
//         return axios.get("/api/students/class/" + classId);
//     },
//     saveStudent: function (classData) {
//         return axios.post("/api/classes", classData);
//     },
//     updateStudent: function (id, classData) {
//         return axios.post("/api/classes" + id, classData);
//     },
//     login: function (userData) {
//         return axios.post("/api/users/login", userData);
//     },
//     signup: function (userData) {
//         return axios.post("/api/users/signup", userData);
//     },
//     logout: function (){
//         return axios.get("/api/users/logout");
//     },
//     getUserData: function (){
//         return axios.get("/api/users/user_data");
//     },
// nameTaken: function (userData) {
//     console.log("triggered api");
//     return axios.get("/api/users/signup", userData);
// },
//     findYearbooks: function() {
//         return axios.get("/api/books");
//     },
//     createYearbook: function(bookData) {
//         return axios.post("/api/books", bookData);
//     },
//     findBookById: function(id){
//         return axios.get("/api/books/" + id);
//     },
//     updateBook: function(id, bookData) {
//         return axios.put("/api/books/" + id, bookData);
//     },
//     deleteBook: function(id) {
//         return axios.delete("/api/books/" + id);
//     },
//     getBooksByYear: function(year){
//         return axios.get("/api/books/year/" + year);
//     },
//     getBooksByUser: function(user){
//         return axios.get("/api/books/user/" + user);
//     }

// }