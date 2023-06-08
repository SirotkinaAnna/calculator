function Buttons({ value, id }) {
    let myClass = ""
    if (value === "AC" || value === 0) {
        myClass = "col-span-2"
    }
    else if (value === "=") {
        myClass = "row-span-2 flex items-center justify-center"
    }

    return <div className={myClass} id={id}>{value}</div>
}
export default Buttons;