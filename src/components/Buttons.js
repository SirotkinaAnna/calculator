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
        setValue(thisValue.concat(value))
    }
    return <div className={myClass || "rounded-lg px-10 py-2 flex items-center justify-center hover:bg-white"} onClick={handleClick} id={id}>{value}</div>
}
export default Buttons;