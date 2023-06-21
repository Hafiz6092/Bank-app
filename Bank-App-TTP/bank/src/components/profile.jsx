export default function Profile(props){
    return(
        <div className="ProfileContainer">
            <div className="row">
            <div className="label">First Name:</div>
            <div className="value">Ghulam</div>
            </div>
            <div className="row">
            <div className="label">Last Name:</div>
            <div className="value">Ahmed</div>
            </div>
            <div className="row">
            <div className="label">Account Number:</div>
            <div className="value">123456789</div>
            </div>
            <div className="row">
            <div className="label">Routing Number:</div>
            <div className="value">929-9876543</div>
            </div>
            <div className="row">
            <div className="label">Contact:</div>
            <div className="value"> g.n1234@example.com</div>
            </div>
            <div className="row">
            <div className="label">Account Balance:</div>
            <div className="value">${props.bal}</div>
            </div>
        </div>
    )
}