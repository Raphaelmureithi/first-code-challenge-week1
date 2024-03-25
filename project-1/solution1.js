function calculateGrade() {
    // Prompt user for input
    let marks
    marks = prompt("Please enter your marks");
    
    // Check if input is valid
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input! Marks must be between 0 and 100.");
        return;
    }
    
    // Determine grade
    var grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    
    // Output grade
    alert("The grade for the student is: " + grade);
}

// Call the function to start the program
calculateGrade();