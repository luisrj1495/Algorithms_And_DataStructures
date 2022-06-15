/**
 * - What is a class?
 * A blueprint for creating objects with pre-defined properties
 * and methods
 */

class Student {
  constructor(name, lastName, year) {
    this.name = name;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
  }
  // Instance methods
  getFullName() {
    return `Your full name is ${this.name} ${this.lastName}`;
  }

  markLate() {
    this.tardies++;

    return `${this.getFullName()} has been late ${this.tardies}`;
  }

  // Class methods
  // They cannot be use it by instances
  static enrollStudents(...students) {
    // Send emails
    console.log("Sending Emails ....");
  }
}

const student = new Student("luis", "ruiz", 1);

student.getFullName();

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}
