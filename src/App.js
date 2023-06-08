
import './App.css';
import Buttons from './components/Buttons';
function App() {
  const values = ["AC", "/", "*", 7, 8, 9, "-", 4, 5, 6, "+", 1, 2, 3, "=", 0, "."];
  const ids = ["clear", "divide", "multiply", "seven", "eight", "nine", "subtract", "four", "five", "six", "add", "one", "two", "three", "equals", "zero", "decimal"];
  let data = [];
  for (let i = 0; i < values.length; i++) {
    data.push({
      value: values[i],
      id: ids[i]
    })

  }
  /// console.log(data)
  const content = data.map((it) => {
    return <Buttons key={it.id} value={it.value} id={it.id} />
  })
  return (
    <div className="App bg-red-700 flex w-screen h-screen">
      <div className='container m-auto w-1/3'>
        <p className='output' id="display"></p>
        <p className='input'></p>
        <div className='grid grid-cols-4'>
          {/* <div className='col-span-2'>AC</div>
          <div>/</div>
          <div>*</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>-</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>+</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div className='row-span-2 flex items-center justify-center'>=</div>
          <div className='col-span-2'>0</div>
          <div>.</div> */}
          {content}
        </div></div>
    </div>
  );
}

export default App;
