import { evaluate } from "mathjs";
import { useState } from "react";
function Buttons({ value, id, setValue, setDisplay, thisValue }) {



  let myClass = ""
  if (value === "RESET") {
    myClass = "col-span-2 px-10 py-2 rounded-lg hover:bg-sky-200 hover:text-white"
  }
  if (value === "=") {
    myClass = "col-span-2 px-10 py-2 rounded-lg hover:bg-red-400 hover:text-white";
  }
  if (value === "DEL") {
    myClass = " px-10 py-2 rounded-lg hover:bg-sky-200 flex items-center justify-center hover:text-white"
  }
  const handleClick = () => {

    if (value !== "=") {
      setValue(thisValue + value)
    }
    else if (value === "=") {
      let result = evaluate(thisValue)
      setDisplay(result)
      setValue(result.toString())

    }
    if (value === "DEL") {
      if (thisValue.length > 1) {
        let newStr = thisValue.toString().slice(0, thisValue.length - 1)
        console.log(thisValue.length)
        setValue(newStr)
      }
      else setValue("0")
    }
    console.log(thisValue)


  }

  return <div className={myClass || "rounded-lg px-10 py-2 flex items-center justify-center hover:bg-white"} onClick={handleClick} id={id}>{value}</div>
}
export default Buttons;