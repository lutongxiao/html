var age = prompt("Please input your Age!")
var now = new Date()
    var age = now.getYear() - age

    console.log()


    var dob = new Date("11/11/2021");
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();
    
   
    var age_dt = new Date(month_diff); 
    
    
    var year = age_dt.getUTCFullYear();
    
 
    var age = Math.abs(year - 1999);
    

    document.write("Age of the date entered: " + age + " years");