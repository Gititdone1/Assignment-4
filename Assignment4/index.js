//1
let   createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(createFullName('Raymo', 'Washington'));  

//2
let createNameFully = (firstName, lastName) => firstName + ' '+ lastName;
console.log(createNameFully('David','Bowie'));

//3
//a
(() => {
    setTimeout(function () { alert('Time is up!'); }, 3000);

})();

//b
var askAreWeThereYet = namedfunc => {
    alert('Are we there yet?')
}
var rtn = setInterval(askAreWeThereYet(), 3000);
clearInterval(rtn);

//4
//a
newEdition = ['Ronny', 'Bobby', 'Ricky','Mike'];

function processSplicedValue(arrOfNames, wheretoSplice,  callbFunc){
 //b       
    var splicedValue = arrOfNames.splice(wheretoSplice,1)
 //c   
    callbFunc(splicedValue);

}

function raysFunc(value){
        
    alert('Way to go '+ value + 'Bobby');

}
//d
processSplicedValue(newEdition,1,console.log);
//e
processSplicedValue(newEdition,1,alert);
//f
processSplicedValue(newEdition, 1, (x) => alert(x));
//g
processSplicedValue(newEdition, 2, raysFunc);






  
