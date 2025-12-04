import "./Card.css";
const Card = ({ 
        give_field_01, 
        give_field_02, 
        give_field_03, 
        give_field_04
}) => {
return (
        <div className="card">
                <h3 className="give-get-field-01">{give_field_01 || ''}</h3>
                <p className="give-get-field-02">{give_field_02}</p>
                <p className="give-get-field-03">{give_field_03 || ""}</p>
                <p className="give-get-field-04">{give_field_04 || ""}</p>
        </div>
);
}

export default Card;