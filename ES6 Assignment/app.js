//Creation of class 
class A{
    setDetails(name, rollNo, grade) {
        this.name = name;
        this.rollNo = rollNo;
        this.grade = grade;
    }
    display() {
        console.log("Name:", this.name);
        console.log("rollNo:", this.rollNo);
        console.log("Grade:", this.grade);
    }
  
}
//Class inherit the properties from class A
class B extends A{
  show(){
    console.log("This is the another student..")
  }
}
//Creation of obj of class........
let obj = new B()
obj.setDetails("Rifresh", 100, "A");
obj.display();
obj.show();