import "./style.css";

const Card =  (props:any) => {
    const { titulo, content } = props;
    const estilo_card = {
        backgroundColor : props.bgcolor || "red",
        borderColor: props.bgcolor || "red",
    }

    return (
        <div className="Card" style={estilo_card}>
            <div className="Title">
                <h1>{titulo}</h1>
            </div>
            <div className="Content">
                <h1>{content}</h1>
            </div>
        </div>
    );
};

export default Card;