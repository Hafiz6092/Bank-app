import React,{useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

function Debit(props) {

    const [description, setDescription] = useState(""); // Holds the description entered in the form
    const [amount, setAmount] = useState(""); // Holds the amount entered in the form
    const [submissions, setSubmissions] = useState([]); // Stores the list of form submissions
    const [totalAmount, setTotalAmount] = useState(props.debit); // Keeps track of the total debit amount
    const [balance, setBalance] = useState(0); // Keeps track of the balance
    useEffect(() =>{
        setTotalAmount(
            props.debit + submissions.reduce((acc, curr)=>{
                return acc - parseFloat(curr.amount);
            },0)
        )
        setBalance(totalAmount - props.credit);
    }, [props.credit, props.debit, submissions, totalAmount]);

    function useDeb(event){
        setDescription(event.target.value);
    }
    function addMoney(event){
        const val = event.target.value;
        if(val === ""){
            alert("Please enter a valid INTEGER");
        }else{
            setAmount(val);
        }
    }

    function handleSub(event){
        event.preventDefault();
        const currentDate = new Date().toLocaleDateString;

        const newSub = {
            description,
            amount,
            date: currentDate,
        };

        setSubmissions({...submissions, newSub});

        setDescription("");
        setAmount("");
    }
     

  
  return (
    <div>
        <h2></h2>
        <div className="debitContainer">
      <form onSubmit={handleSub} className="forms">
        <div className="innerContainer">
        <input 
          type="text"
          value={description}
          placeholder="Enter Description"
          onChange={useDeb}
        />
        <input
          type="text"
          value={amount}
          placeholder="Enter Amount"
          onChange={addMoney}
        />
        <button type="submit">Submit</button>
        </div>
      </form>
      <h3>Remaining Account Balance: ${balance} </h3>
      <h3>Total Debit: ${totalAmount}</h3>

      <div>
        {/* Map over submissions to render the details of each submission */}
        {submissions.map((submission, index) => (
          <div key={index}>
            <p>
              Description: {submission.description} &nbsp;&nbsp; Amount: ${submission.amount} &nbsp;&nbsp;{submission.date}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
      <nav className="backto">
        <ul className="bul">
          <li className="bli">
            <Link to="/profile">Back to Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Debit;