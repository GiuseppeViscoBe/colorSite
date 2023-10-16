import { useState } from "react";

function Form({getColors}) {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();

  function setFirstValue(event) {
    setValue1(event.target.value);
  }

  function setSecondValue(event) {
    setValue2(event.target.value);
  }

  function setThirdValue(event) {
    setValue3(event.target.value);
  }

  function passColors(event) {
    event.preventDefault();
    let numero1 = parseInt(value1);
    let numero2 = parseInt(value2);
    let numero3 = parseInt(value3);

    const colors = {
      numero1: numero1,
      numero2: numero2,
      numero3: numero3,
    };

    getColors(colors)
    console.log(colors);
  }

  function randomClickColors(event){
    event.preventDefault();

    const numero1 = Math.floor(Math.random() * 256);
    const numero2 = Math.floor(Math.random() * 256);
    const numero3 = Math.floor(Math.random() * 256);
  
    const colors = {
      numero1: numero1,
      numero2: numero2,
      numero3: numero3,
    };

    getColors(colors)
  }

  return (
    <form>
      <label htmlFor="value1">Value 1:</label>
      <br />
      <input type="text" id="value1" name="value1" onChange={setFirstValue} />
      <br />
      <label htmlFor="value2">Value 2:</label>
      <br />
      <input type="text" id="value2" name="value2" onChange={setSecondValue} />
      <br />
      <label htmlFor="value3">Value 3:</label>
      <br />
      <input type="text" id="value3" name="value3" onChange={setThirdValue} />
      <br />
      <button onClick={passColors}>Click</button>
      <br />
      <button onClick={randomClickColors}>Click Random</button>
    </form>
  );
}

export default Form;
