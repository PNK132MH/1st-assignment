function Todo(){
    return(

    <div className="container">
        <div className="first">
        <h1>My To Do List</h1>
        </div>
        <div className="third">
            <form className="form" action="">
                <input 
                className="input"
                 type="text" 
                 placeholder="Type a New Task.." 
                 required/>
            </form>
             <button className="btn">ADD</button>
        </div>
       
            <div className="second">
            <form action="" className="form1">
                <li>
                Introduction
                </li>
           
             <button className="del">DELETE</button>
            </form>
           
            </div>
            <div className="fourth">
            <form action="" className="form2">
                <li>
                Ice Breaker
                </li>
           
             <button className="del">DELETE</button>
            </form>
           
            </div>
            
    </div>
      )
    }
export default Todo