import {NavLink} from "react-router-dom";
import PortfolioCard from "./props";
function Contact(){
    function handleSubmit(){
        alert(`form submitted`)
    }
    return(
        <>
       
        <nav>
             <div className="portfolio">
              <PortfolioCard 
        title="My Portfolio" className="portfolio" />
        </div>
        <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Project">Projects</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
        </div>
        </nav>
        <PortfolioCard
        intro="Contact Form" />
         <PortfolioCard
        param = "This page teaches a ReactForm with state"/>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Name
                <input type="text" 
                placeholder="Your name"
                required/>
            </label>
            </div>
        
       <div>
            <label>Email
                <input type="email" 
                placeholder="Your email"
                required/>
            </label>
            </div>
        
        <div>
            <label>Message
                <textarea rows={5} cols={20} placeholder="Your Message" required />
            </label>
            </div>
            <button type="submit">Send</button>
        </form>

        
        <footer>
            <p>My Portfolio</p>
            <p>Email:Philimona@gmail.com </p>
        </footer>
        </>
    )
}
export default Contact