var fs = require('fs');
var count = 0
class Visitor {
   constructor ( firstName, secondName, dateOfVisit, timeOfVisit, nameOfAssistant, comments ){
       this.fullname = firstName + " " + secondName;
       this.dateOfVisit = dateOfVisit;
       this.timeOfVisit = timeOfVisit;
       this.nameOfAssistant = nameOfAssistant;
       this.comments = comments;
       this.count = 0;
   }
    
   
   get() {
       console.log("oh yeyy");
       console.log(this.fullname);
   }
    increaseCount() {
       count += 1;
       return count
   }
   
   save() {
       this. increaseCount();
       var path = "visitor_1.txt" + count + ".json";
       var data = "Fullname: " + this.fullname + " Date of Visit: " + this.dateOfVisit + " Time of Visit: " + this.timeOfVisit + " Assisstant " + this.nameOfAssistant + " Comment " + this.comments + ".\n";
       fs.writeFileSync(path, data)
       console.log(count);
   }
   load(index) {
       if(index <= 0) {
           console.log("File not found");
       }
       var path = "visitor_1.txt" + index;
      var data =  fs.readFileSync(path);
      console.log(data);
   }
}
var linda = new Visitor( "Lindo", 22, 3, "Samke", "no comments" );
var buhle = new Visitor( "Clode", 12,6,"Jake","no comments");
linda.get();
linda.save();
buhle.save();
//buhle.load(1);
