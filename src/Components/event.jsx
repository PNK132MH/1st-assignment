function Event(){
    
    const handleClick=()=>{
        alert(`button clicked`)
    }
    return(
        <button onClick={handleClick} >
            Click Me</button>)
}
export default Event;