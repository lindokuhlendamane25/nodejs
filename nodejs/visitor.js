var fs = require("fs");
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
       var path = "visitor_" + count + ".json";

       var data = JSON.stringify(this)
       fs.writeFileSync(path, data)
       return "file  saved";
   }
   load() {
        if(count<= 0) {
            console.log("File not found");
     }
    
     let path = "visitor_" + count;
     var data = JSON.stringify(this)
     try {
         
     } catch (error) {
        fs.readFileSync(path, data);
     }
     return (data)

   }
}
// var linda = new Visitor( "Lindo", 22, 3, "Samke", "no comments" );
//  var buhle = new Visitor( "Clode", 12,6,"Jake","no comments");
// linda.get();
// linda.save();
// buhle.save();

//buhle.load(1);
 

module.exports = Visitor
