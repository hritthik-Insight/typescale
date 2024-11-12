import { Outlet, NavLink } from "react-router-dom";  
import "./App.css";  

  
export default function App() {  
  return (  
    <>  
      {/* sidebar */}  
      <div id="sidebar">  
        <h1 className="h1">  
          Design Tokens  
        </h1>  
        <div>  
          <form id="search-form" role="search">  
            <input  
              id="q"  
              placeholder="Search"  
              type="search"  
              name="q"  
            />  
            <div  
              id="search-spinner"  
              aria-hidden  
              hidden={true}  
            />  
          </form>  
          
        </div>  
        <nav>  
          <ul>  
          <li>
            <NavLink to={`/`} >Home</NavLink>
          </li>
            <li>  
              <NavLink to={`/FontDisplay`}>Font Display</NavLink>  
            </li>  
            <li>  
              <NavLink to={`/Typescale`}>Typescale</NavLink>  
            </li>  
          </ul>  
        </nav>  
      </div>  
      {/* main body */}  
      <div id="body" className="body">    
        <Outlet />  
      </div>  
    </>  
  );  
}  