//--------------------------------
//  Chapter 11: Objects and Object-Oriented Programming
//--------------------------------

// Objects
const student = {
    fullName: "Naquiuzzaman",
    marks: 98.78,
    grade: "A+",
    printMarks: function() {
        console.log ("marks =", this.marks);
    },
};