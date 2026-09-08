import {Navigate, NavLink, useNavigate} from "react-router-dom"
import PortfolioCard from "./props";
import Todo from "./projects/todo-list";
import { useState } from "react";
function Projects(){
    const navigate = useNavigate();
    function HandleClick(){
        navigate("/todo-list");
    }

    
    return(
        <>
        
        <nav>
            <div className="portfolio">
             <PortfolioCard 
        title="My Portfolio"/>
        </div>
        <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Project">Projects</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
        </div>
        </nav>
        
        <PortfolioCard
        intro="Projects" />
        <PortfolioCard
        param = "Here are few sample projects"/>
    
        <div className="todo">
        <PortfolioCard
        title = "Todo List" />
        <PortfolioCard
        param = "A list app that can add and delete tasks." />
        </div>
        <div className="expense">
       <PortfolioCard
        title = "Expense Tracker" />
        <PortfolioCard
        param = "An app that adds expenses and shows total." />
        </div>
        <div className="task">
       <PortfolioCard
        title = "Task Manager" />
        <PortfolioCard
        param = "A React app that uses useState and useEffect" />
        <button onClick={HandleClick} >Click to see</button>
        </div>
         <footer>
            <p>My Portfolio</p>
            <p>Email:Philimona@gmail.com </p>
        </footer>
        </>
    )

}
export default Projects