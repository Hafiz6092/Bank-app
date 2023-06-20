import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Debit() {
  
  return (
    <div>
      <h2>Debit</h2>
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

export default Debit;