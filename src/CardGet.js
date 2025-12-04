import "./Card.css";
const CardGet = ({ 
        get_field_01, 
        get_field_02, 
        get_field_03, 
        get_field_04
}) => {
return (
        <div className="card">
                <h3 className="give-get-field-01">{get_field_01 || ""}</h3>
                <p className="give-get-field-02">{get_field_02}</p>
                <p className="give-get-field-03">{get_field_03 || ""}</p>
                <p className="give-get-field-04">{get_field_04 || ""}</p>
        </div>
);
}

export default CardGet;