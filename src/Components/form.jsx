function MyForm() {
    function handleSubmit(){
        alert(`form submitted`)
    }
    function handleChange(e){
        console.log(e.target.value)
    }
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input type="text" />
      </label>
      <label>Email 
        <input type="email" />
      </label>
      <label>Password 
        <input type="password" onChange={handleChange}/>
      </label>
      <button type="submit">Submit</button>
    </form>
    
  )
  
}
export default MyForm;