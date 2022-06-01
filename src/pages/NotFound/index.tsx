import { Link } from "react-router-dom";

export const NotFound = ()=>(
    <div>
        
    <h1>
        404
    </h1>
    <p>Page not found,
        <Link to="/">go home!</Link>
    </p>
    </div>
)
