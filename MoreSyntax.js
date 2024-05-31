function* iteratorFunc() {
    let count = 0;
    for (let i = 0; i < 2; i++) {
        count++;
        yield i;
    }
    return count;
  }
  
  let iterator = iteratorFunc();
  console.log(iterator.next()); // {value:0,done:false}
  console.log(iterator.next()); // {value:1,done:false}
  console.log(iterator.next()); // {value:2,done:true}
// done true means generator func has reached to return statement 

const newSet = new Set([4, 5, 6, 7]);
console.log(newSet);// Outputs Set {4,5,6,7}

// const newSet2 = new WeakSet([3, 4, 5]); //Throws an error


let obj1 = {message:"Hello world"};
const newSet3 = new WeakSet([obj1]);
console.log(newSet3.has(obj1)); // true

const map1 = new Map();
map1.set('Value', 1);

const map2 = new WeakMap();
// map2.set('Value', 2.3); // Throws an error

let obj = {name:"Vivek"};
const map3 = new WeakMap();
map3.set(obj, {age:23});

const classDetails = {
    strength: 78,
    benches: 39,
    blackBoard:1
  }
  
  const {strength, benches,blackBoard} = classDetails;
  console.log(strength, benches,blackBoard); // 78 39 1

  const obj5 = {name: 'asdk'}
  const obj2 = {name: 'poq'}

  console.log('obj1', obj5)

  var obj10 = {
    address : "Mumbai,India",
    getAddress: function(){
    console.log(this.address); 
  }
}
   
var getAddress = obj10.getAddress;
console.log('get', getAddress)
// error in this code
// var obj20 = {name:"akshay", address: 'a'};
// obj20.getAddress();    