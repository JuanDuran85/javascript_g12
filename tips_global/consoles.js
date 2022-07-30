/*

    Ejemplos, trucos y tips para trabajar con console en JavaScript.
    
    The console object provides access to the browser's debugging console (e.g. the Web console in Firefox). The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided. 

        - console.assert
        - console.clear
        - console.count
        - console.countReset
        - console.debug
        - console.dir
        - console.dirxml
        - console.error
        - console.group
        - console.time
        - console.timeEnd
        - console.groupEnd
        - console.log
        - console.warn
        - console.info
        - console.table
        - console.trace
        - console.profile
        - console.profileEnd
        - console.assert
        - console.groupCollapsed

*/

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// console.assert; use to make conditional log statements.
// ----------------------------------------------------------------------------------------
const user = {
    name: 'John',
}
console.log("console.assert")
console.assert(1 == 2, "1 == 2 --> not is true");
console.assert(user.id, "user id is missing");
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The console.clear() method clears the console if the environment allows it. 
// ----------------------------------------------------------------------------------------
console.log("console.clear()")
console.clear();
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The console.count() method logs the number of times that this particular call to count() has been called. 
// ----------------------------------------------------------------------------------------
console.log("console.count()")

const countFunction = () => {
    console.count();
    console.log("Log al entrar a la funcion...");
}

countFunction();
countFunction();
countFunction();
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The console.countReset() method resets counter used with console.count(). 
// ----------------------------------------------------------------------------------------
console.log("console.countReset()")
console.countReset()
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The console.debug() method outputs a message to the web console at the "debug" log level. The message is only displayed to the user if the console is configured to display debug output. In most cases, the log level is configured within the console UI. This log level might correspond to the `Debug` or `Verbose` log level. 
// ----------------------------------------------------------------------------------------
console.log("console.debug()");
for (let index = 0; index < 20; index++) {
    console.debug(index,"Index en debud");
}
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
//  The method console.dir() displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.
//In other words, console.dir() is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object. 
// ----------------------------------------------------------------------------------------
console.log("console.dir()");
const userTwo = {
    name: 'John',
    age: 30,
    city: 'New York',
    getName: function () {
        return this.name;
    }
};
console.dir(userTwo);
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The console.dirxml() method displays an interactive tree of the descendant elements of the specified XML/HTML element. If it is not possible to display as an element the JavaScript Object view is shown instead. The output is presented as a hierarchical listing of expandable nodes that let you see the contents of child nodes. 
// ----------------------------------------------------------------------------------------
console.log("console.dirxml()")
console.dirxml(userTwo);

//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The console.error() method outputs an error message to the Web console.
// ----------------------------------------------------------------------------------------
console.log("")
console.error("Mensaje de error para: ",userTwo);
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');












// ----------------------------------------------------------------------------------------
// console.time: genera un temporizador que nos permite medir el tiempo de ejecucion de de los procesos en JS.
// ----------------------------------------------------------------------------------------
console.log("console.time")
console.time('----------Time suma------');
let numbers = [4,5,6,3,4,1,2,8,5,4,3,8,9,7,6,5,4,3,2,1,0];
let result = 0;
numbers.forEach(num => result += num);
console.log({result});
console.timeEnd('----------Time suma------');
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The console.trace() method outputs a stack trace to the Web console.
// ----------------------------------------------------------------------------------------
const someFunction = () => console.trace("Log al entrar a la funcion...");
someFunction();
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');





console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------
console.log("")

//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------
console.log("")

//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------
console.log("")

//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------
console.log("")

//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------
console.log("")

//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------------------');