import {NavLink} from "react-router-dom";
import image from "./image.png";
import PortfolioCard from "./props";
function Home(){
    return(
        <>
       
        <nav>
            <div className="portfolio">
             <PortfolioCard 
        title="My Portfolio"  />
        </div>

        <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Project">Projects</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
        </div>
            
        </nav>
        <PortfolioCard 
        intro="Hello I am a Student"/>
        <img src={image} alt="photo" width={300} height={300}/>
        
        <PortfolioCard
        param="This is a simple portfolio website built with 
        React Router. Use the links above to open About , Projects and Contact"/>
        <footer>
            <p>My Portfolio</p>
            <p>Email:Philimona@gmail.com </p>
        </footer>

        </>
    )
}
    
export default Home