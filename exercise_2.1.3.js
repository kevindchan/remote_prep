/* Exercises:

1. Create a function log_and_return that console.logs all of its inputs and then returns them from the function invocation.
2. Store the return value as a variable returned_values
3. Pass that variable as an argument to a second invocation of log_and_return
*/

function log_and_return() {
  console.log(arguments);
  return arguments;
}
var returned_values = log_and_return(1, "hello");


log_and_return(returned_values);