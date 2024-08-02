const JsCourse = {
    courseName : "JavaScript Course",
    price : 999,
    courseInstructor : "Vasu Mehta"
}

//This destructuring concept is widely used in React
const {courseInstructor} = JsCourse
console.log(courseInstructor);

//If you want to assign another name, you can do that too
const {courseInstructor : Instructor} = JsCourse
console.log(Instructor);