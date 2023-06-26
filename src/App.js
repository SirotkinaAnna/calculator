
import './App.css';
import { useState } from 'react';
import Buttons from './components/Buttons';
function App() {
  const [display, setDisplay] = useState(0);
  const [myvalue, setValue] = useState("0")
  //const values = ["RESET", "/", "*", 7, 8, 9, "-", 4, 5, 6, "+", 1, 2, 3, "=", 0, "."];
  const values = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "*", "RESET", "="];
  //const ids = ["clear", "divide", "multiply", "seven", "eight", "nine", "subtract", "four", "five", "six", "add", "one", "two", "three", "equals", "zero", "decimal"];
  const ids = ["seven", "eight", "nine", "delete", "four", "five", "six", "add", "one", "two", "three", "subtract", "decimal", "zero", "divide", "multiply", "clear", "equals"]
  let data = [];
  for (let i = 0; i < values.length; i++) {
    data.push({
      value: values[i],
      id: ids[i]
    })

  }
  /// console.log(data)
  const content = data.map((it) => {
    return <Buttons key={it.id} value={it.value} id={it.id} setDisplay={setDisplay} setValue={setValue} thisValue={myvalue} />
  })
  return (
    <div className="App  flex w-screen h-screen">
      <div className='container m-auto w-1/3 '>
        <div className='nav flex place-content-between items-end'>
          <div className='my-logo text-white px-2'>calc</div>
          <div className='flex items-end'>theme

            <div className='grid grid-rows ms-2'>
              <div className='grid grid-cols-3 text-sm gap-1 px-1'>
                <div>1</div><div>2</div><div>3</div></div>
              <div className="grid grid-cols-3 rounded-full gap-1 bg-my p-1">
                <div className='rounded-full bg-red-900 w-3 h-3'></div>
                <div className='rounded-full bg-red-900'></div>
                <div className='rounded-full bg-red-900'></div>


              </div>
            </div>
          </div></div>
        <div className='output my-6  pt-4 pb-6 px-6 w-full rounded-lg bg-my ' >
          <p className='text-end text-whites'>{myvalue}</p>
          <p className='text-4xl text-end font-bold text-white' id="display">{parseFloat(display)}</p>
        </div>

        <div className='bg-my grid-my grid grid-cols-4 gap-y-7 gap-x-6 text-center p-8 rounded-lg'>

          {content}
        </div>
      </div>
    </div>
  );
}

export default App;
