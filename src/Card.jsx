import Button from "@material-ui/core/Button";
import "./Card.css";
function Card(props) {
  return (
    <div className="card">
      <h1 className="card-name">{props.name}</h1>
      <div className="card-contact-address">Address:-{props.address}</div>
      <div className="card-contact-number">
        Contact No.
        {props.number}
      </div>
      <div className="card-info">
        <Button variant="contained" color="secondary" className="btn">
          Services
        </Button>
      </div>
    </div>
  );
}

export default Card;
