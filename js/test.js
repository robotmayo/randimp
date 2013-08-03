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

console.log(stackA.contains(stackB));
console.log(stackC.contains(testArray[1]));
console.log(stackD.contains(4));