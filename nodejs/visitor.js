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
    
    getCount() {
       console.log(count);
       return count;
   }
   get() {
       console.log("oh yeyy");
       console.log(this.fullname);
   }
    increaseCount() {
       count += 1;
      
   }
   
   save() {
       this.increaseCount();
       this.getCount();
       var path = "visitor_" + count + ".txt";
       var data = "Fullname: " + this.fullname + " Date of Visit: " + this.dateOfVisit + " Time of Visit: " + this.timeOfVisit + " Assisstant " + this.nameOfAssistant + " Comment " + this.comments + ".\n";
       fs.writeFileSync(path, data)
       console.log(count);
   }
   load(index) {
       if(index <= 0) {
           console.log("File not found");
       }
       var path = "visitor_" + index;
      var data =  fs.readFileSync(path);
      console.log(data);
   }
}
var linda = new Visitor( "lindo", 22, 3, "Samke", "no comments" );
var Buhle = new Visitor( "Clode", 12,6,"Jake","no comments");
linda.get();
linda.save();
buhle.save();
buhle.load(1);