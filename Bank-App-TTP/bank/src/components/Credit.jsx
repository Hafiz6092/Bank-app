import React, {useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

const Credit = () =>{
    const[creditList, setCreditList] = useState({});

    useEffect(() =>{
        async function fetchCredit();
        

    })
}

function Credit() {
  
  return (
    <div>
      <h2>Credit</h2>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Back to Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Credit;