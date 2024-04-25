const val="123"
// is Not a number ,NaN converts to a number so string like 123 are number 
console.log(isNaN(val))

// this corresponds to the object that has called the function (in this case global object)
function doSomething() {
    console.log(this);
  }
     
  doSomething();