function Button() {
  // To use a state object, React has a special function named useState()
  // a, b = useState()
  // a: state object (getter)
  // b: updater function (setter)
  // full syntax: const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue)
  
  // Using JS destructuring feature , to capture two variables in one line
  const [counter, setCounter] = useState(0);
  
  //JSX supports displaying dynamic expression if we place them within curly braces anywhwre inside JSX
  // return <button>{Math.random()}</button>;
	
  // Define an onClick attribute on the button element
  // Receives a function reference
  // onClick={functionRef}, NOT invoke the function onClick={functionRef()}
  // return <button onClick={
  //   // Inline arrow function definition
  //   () => {
  //     console.log(Math.random());
  //   }
  // }>{counter}</button>;
  
  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);
