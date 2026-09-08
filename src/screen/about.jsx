import {NavLink} from "react-router-dom";
import image from "./image.png";
import PortfolioCard from "./props";
function About(){
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
                intro="About Me" />
                <img src={image} alt="photo" />
        <div>
        <PortfolioCard
        param="My name is Philimona. I am learning React, HTML, CSS and JavaScript."/>
        <PortfolioCard
        param="I like building small Websites and practicing new coding skills."/>
        <PortfolioCard
        param="This About page is a normal React Component . React Router shows it when the url is /About"/>
        </div>
        <footer>
            <p>My Portfolio</p>
            <p>Email:Philimona@gmail.com </p>
        </footer>

        </>

    )
}
export default About