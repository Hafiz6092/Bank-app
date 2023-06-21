import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Exporting a function component named CreditForm
export default function CreditForm(props) {
  // Set up states
  const [creditDescription, setCreditDescription] = useState(""); // Holds the credit description entered in the form
  const [creditAmount, setCreditAmount] = useState(""); // Holds the credit amount entered in the form
  const [creditSubmissions, setCreditSubmissions] = useState([]); // Stores the list of credit submissions
  const [totalCreditAmount, setTotalCreditAmount] = useState(props.credit); // Keeps track of the total amount of credit
  const [balance, setBalance] = useState(0); // Keeps track of the balance

  // UseEffect to calculate total credit and balance
  useEffect(() => {
    // Calculate total amount using the credit from props and the sum of all submitted credit amounts
    setTotalCreditAmount(
      props.credit +
        creditSubmissions.reduce((acc, curr) => {
          return acc + parseFloat(curr.amount);
        }, 0)
    );
    // Calculate balance by subtracting the total amount of credit from the debit
    const calculatedBalance = props.debit - props.credit - creditSubmissions.reduce((acc, curr) => {
      return acc + parseFloat(curr.amount);
    }, 0);
    setBalance(calculatedBalance);
  }, [props.credit, creditSubmissions, props.debit]); // Dependency array

  // Function to handle change in credit description input field
  function handleCreditDescriptionChange(event) {
    setCreditDescription(event.target.value);
  }

  // Function to handle change in credit amount input field
  function handleCreditAmountChange(event) {
    const value = event.target.value;
    // Use ternary operator to avoid NaN when value is empty
    setCreditAmount(value === "" ? "" : parseFloat(value));
  }

  // Function to handle credit form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Get the current date
    const currentDate = new Date().toLocaleDateString();

    // Create a new credit submission object
    const newCreditSubmission = {
      description: creditDescription,
      amount: creditAmount,
      date: currentDate,
    };

    // Add the new credit submission to the array of credit submissions
    setCreditSubmissions([...creditSubmissions, newCreditSubmission]);

    // Clear the credit input fields
    setCreditDescription("");
    setCreditAmount("");
  }

  // Return JSX for rendering
  return (
    <div className="creditContainer">
      <form onSubmit={handleSubmit} className="forms">
        <div className="innerContainer">
          <input
            type="text"
            value={creditDescription}
            placeholder="Enter Credit Description"
            onChange={handleCreditDescriptionChange}
          />
          <input
            type="text"
            value={creditAmount}
            placeholder="Enter Credit Amount"
            onChange={handleCreditAmountChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>

      <h3>Remaining Account Balance: ${balance}</h3>
      <h3>Total Credit: ${totalCreditAmount}</h3>

      <div>
        {/* Map over credit submissions to render the details of each credit submission */}
        {creditSubmissions.map((submission, index) => (
          <div key={index}>
            <p>
              Description: {submission.description} &nbsp;&nbsp; Amount: ${submission.amount} &nbsp;&nbsp;{submission.date}
            </p>
            <hr />
          </div>
        ))}
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
