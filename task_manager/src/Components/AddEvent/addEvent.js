import { useState} from "react";
import "./addEvent.scss"
import EventPreview from "../EventPreview/eventPreview"

const AddEvent = () => {

    const [timeLength,changeTimeLength] = useState(0);
    const [eventName,changeEventName] = useState("Example Name");
    const [eventStartTime,changeEventStartTime] = useState("00:00PM");
    const [eventDescription, changeEventDescription] = useState("");
    const [rgb,changeRGB] = useState("#27C8D3")

    const h4style = { color: rgb }
    return (
        <div className="add-event-wrapper">
        <div className="Add-Event">
                <h2>Add Another Task!</h2>
                <div className="section">
                    <h5>Event Name: </h5>
                    <input value={eventName} onChange={(e)=>changeEventName(e.target.value)}></input>
                </div>
                <div className="section">
                    <h5>Event Time Start:</h5>
                    <input type="time" value={eventStartTime} onChange={(e)=>changeEventStartTime(e.target.value)}/>
                </div>
                <div className="section">
                    <h5>Proposed Time Length:</h5>
                    <input type="range" min="0" max="240" step="5" value={timeLength} onChange={(e)=>changeTimeLength(e.target.value)}/>
                    <h5>{timeLength} minutes</h5>
                </div>
                <div className="description-group">
                    <h5>Description:</h5>
                    <input className="description" value={eventDescription} onChange={e => changeEventDescription(e.target.value)}></input>
                </div>
                <div className="description-group">
                    <h4 id="colorAnswer" style={h4style}>Event Color:</h4>
                    <input type="color" id="picker"  value={rgb} onChange={e => changeRGB(e.target.value)}/>
                </div>
                <button >Add Event</button>
        </div>
            <div>
            <EventPreview name={eventName} start={eventStartTime} description={eventDescription} color={rgb}></EventPreview>
            </div>
        </div>
    )
}

export default AddEvent;
