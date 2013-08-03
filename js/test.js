var output = document.getElementById('output');  
  
function assert( outcome, description ) {  
    var li = document.createElement('li');  
    li.className = outcome ? 'pass' : 'fail';  
    li.appendChild( document.createTextNode( description ) );  
      
    output.appendChild(li);  
};
var log = function(args){console.log(args)}

var stackA = new Stack();
stackA.add(4);
stackA.add(1);
stackA.add(4613);
stackA.add("ADG");
var tp = {title:"yes"};
var stackB = new Stack();
//stackA.add(tp);
stackA.add(stackB);
var testArray = ["test 1",4,{F:"F"}];
var stackC = new Stack(testArray);
var stackD = new Stack(1,2,3,4,5,6,7,8,9,10);

assert(stackA.contains(stackB) === true, "StackA contains StackB");
assert(stackC.contains(testArray[1]) === true, "StackC contains value from array used as arguments");
assert(stackD.contains(4) === true, "StackD contains the value when inputted as variable argument");
assert(stackD.contains("POTATO") === false, "StackD should not contain a POTATO");

var listA = new LinkedList();
listA.push(3);

var listB = new LinkedList(testArray);




assert(listA.get(0).value === 3, "ListA's first value should be 3");
assert(listA.size() === 1, "ListA should be of size 1");
assert(listB.size() === testArray.length, "ListB's size should be equal to the array provieded");