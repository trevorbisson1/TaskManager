
const EventPreview  = ({name,start,description,color}) => {

    const background = { backgroundColor: color }
    return(
        <div className="Event-Preview" style={background}>
            <h3>{name}</h3>
            <h4> {start}</h4>
            <h6>{description}</h6>
        </div>
    );
}

export default EventPreview;