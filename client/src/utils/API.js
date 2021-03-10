import axios from "axios";
const API = {
    signup: function (userData) {
        console.log("triggered api");
        return axios.post("/api/users/signup", userData);
    },
    login: function (userData) {
        console.log("i login")
        return axios.put("/api/users/login", userData);
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
    getBooksByName: function (name) {
        return axios.get("/api/books/ynn/" + name);
    },
    getBooksByYearandName: function (year, name) {
        return axios.get("/api/books/yn/" + year + "/" + name);
    },
    saveStudent: function (studentData) {
        return axios.post("/api/student", studentData);
    },
    saveClass: function (classData) {
        return axios.post("/api/classes", classData);
    },
    getBooksByUser: function (user) {
        return axios.get("/api/books/user/" + user);
    },
    getClassByBook: function (book) {
        return axios.get("/api/classes/book/" + book);
    },
    getStudentByClass: function (classId) {
        return axios.get("/api/student/class/" + classId);
    },
    findBookById: function (id) {
        return axios.get("/api/books/" + id);
    },
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    getClassById: function (id) {
        return axios.get("/api/classes/" + id);
    },
    deleteStudent: function (id) {
        return axios.delete("/api/student/" + id);
    },
    getUserById: function (id) {
        return axios.get("/api/users/" + id)
    }
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
//     
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
//     logout: function (){
//         return axios.get("/api/users/logout");
//     },
//     getUserData: function (){
//         return axios.get("/api/users/user_data");
//     },
//     nameTaken: function (userData) {
//     console.log("triggered api");
//     return axios.get("/api/users/signup", userData);
//     },
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