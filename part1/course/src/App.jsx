const Hello = (props) => {
  console.log(props);
  return (
    <>
      <h1>Greetings {props.name}, your age is {props.age}</h1>
      <p>How are you {props.name}</p>
    </>
  )
}

function App() {
  const age = 19
  const name = 'afra'

  return (
    <>
      <Hello name={name} age={age} />
    </>
  )
}

export default App
