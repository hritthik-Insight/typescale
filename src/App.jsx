import { Outlet } from "react-router-dom";  
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
              <a href={`/FontDisplay`}>Font Display</a>  
            </li>  
            <li>  
              <a href={`/Typescale`}>Typescale</a>  
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