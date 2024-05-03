// const a = function(){
//     console.log(this);
  
//     const b = {
//       func1: function(){
//         console.log(this);
//       }  
//     }
  
//     const c = {
//       func2: ()=>{
//         console.log(this);
//       }
//     }
  
//     b.func1();
//     c.func2();
//   }
  
//   a();

function* a() {
    const a =  yield 1 
    console.log('a',a)
    const b = yield 2
    console.log('b',b)
}

const gen = a(); // Create the generator object

console.log(gen.next());  // Starts execution up to the first yield and logs { value: 1, done: false }
console.log(gen.next('first'));  // Resumes execution, 'first' is assigned to a, and goes up to the next yield
                                // Logs 'a first' and { value: 2, done: false }
console.log(gen.next('second')); // Resumes execution, 'second' is assigned to b, and reaches the end of the function
                                 // Logs 'b second' and { value: undefined, done: true }
