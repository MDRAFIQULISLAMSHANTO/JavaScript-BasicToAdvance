class Students {
    constructor(name,id){
        this.id = id;
        this.name = name;

    }
    set studentName(name){
        this.name = name; 
    }
    get studentInfo(){
        return this.id + " " + this.name;
    }
}

    
 let s1 = new Students(225, "Shanto");
 s1.studentName = "khaadi";
 console.log(s1);
 console.log(s1.id);
 console.log(s1.name);
 console.log(s1.name);
console.log(s1.studentInfo);