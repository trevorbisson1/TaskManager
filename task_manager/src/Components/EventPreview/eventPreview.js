

const EventPreview  = ({name,start,description,color, timingLength}) => {


    const styling = { backgroundColor: color, height:timingLength}
    return(
        <div className="Event-Preview" style={styling}>
            <h3>{name}</h3>
            <h4> {start}</h4>
            <h6>{description}</h6>
        </div>
    );
}

export default EventPreview;