class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}
class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
}
class Teacher extends Person{
    constructor(name,startYear,salary){
        super(name,startYear)
        this.salary=salary
        this.courses={}
    }
    giveGrade(student,course, grade){
       student.receiveGrade(course,grade)
    }
    addCourse(course){
        if(this.courses[course]){
            return this.courses[course]++
        }
        this.courses[course] = 1
    }
}
const s1 = new Student("Ronda", 2017)
const t1 = new Teacher("Cassandra", 2002, 40000)

t1.giveGrade(s1, "Algebra II", 82)
const firstGrade = s1.grades[0]

console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)


const t2 = new Teacher("Cassandra", 2002, 40000)
t2.addCourse("Algebra II")
t2.addCourse("Algebra II")
t2.addCourse("Trigonometry")
console.log(t2.courses)

class Principal extends Person{
    constructor(name,startYear){
        super(name,startYear)
        this.teachers=[]
        this.students=[]
    }
    hireTeacher(teacher){
        this.teachers.push(teacher)
        console.log(this.name+" just hired"+teacher.name)
    }
    recruitStudent(student){
        this.students.push(student)
    }
    expelStudent(student){
        let x=this.students.indexOf(student)
        this.students.splice(x,1)
    }
    transferStudent(student,principal){
        let x=this.students.indexOf(student)
        this.students.splice(x,1)
        principal.students.push(student)
    }
}
const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t3 = new Teacher("Cassandra", 2002, 40000)
const t4 = new Teacher("Kevin", 2006, 30000)

const s3 = new Student("Ronda", 2017)
const s4 = new Student("Byron", 2016)

//1 & 2
p1.hireTeacher(t3) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t4) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s3)
p1.recruitStudent(s4)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s3)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s4, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron