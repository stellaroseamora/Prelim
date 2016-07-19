const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a grade: ', (grade) => {
  // TODO: Log the answer in a database
  
  var grade = parseInt(grade);
  console.log(grade);
  
  deduct(grade,3);
  deduct(grade,2);
  add(grade,5);
  add(grade,3);
  
  
   rl.close();
});
function deduct(grade,increment){
    var grade1 = grade + decrement;
    var grade2 = grade + increment;
    
    if(test<75){
        console.log(increment); 
}

module.exports = {
    computegrade :grades
}

