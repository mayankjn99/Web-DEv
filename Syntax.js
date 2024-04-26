const val="123"
// is Not a number ,NaN converts to a number so string like 123 are number 
console.log(isNaN(val))

// this corresponds to the object that has called the function (in this case global object)
function doSomething() {
    // console.log(this);
  }
     
  doSomething();

var arrowSample = () => {
  console.log('arrow function')
}

arrowSample()

function sumOfThreeElements(...elements){
  return new Promise((resolve,reject)=>{
    if(elements.length > 3 ){
      reject("Only three elements or less are allowed");
    }
    else{
      let sum = 0;
      let i = 0;
      while(i < elements.length){
        sum += elements[i];
        i++;
      }
      resolve("Sum has been calculated: "+sum);
    }
  })
}

sumOfThreeElements(1,2,3).then((result)=>{
  console.log(result);
}).catch((error)=>{
  console.log(error);
})
