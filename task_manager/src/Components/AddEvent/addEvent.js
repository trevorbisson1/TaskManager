import { useState} from "react";
import "./addEvent.scss"

const AddEvent = () => {

    const [timeLength,changeTimeLength] = useState(0);

    const [rgb,changeRGB] = useState("FFFFFF")

    const h4style = { color: rgb }
    return (
        <div className="Add-Event">
                <h2>Add Another Task!</h2>
                <div className="section">
                    <h5>Event Name: </h5>
                    <input></input>
                </div>
                <div className="section">
                    <h5>Event Time Start:</h5>
                    <input type="time" />
                </div>
                <div className="section">
                    <h5>Proposed Time Length:</h5>
                    <input type="range" min="0" max="240" step="5" value={timeLength} onChange={(e)=>changeTimeLength(e.target.value)}/>
                    <h5>{timeLength} minutes</h5>
                </div>
                <div className="gorp">
                    <h5>Description:</h5>
                    <input className="description"></input>
                </div>
                <div className="picker">
                    <h4 id="colorAnswer" style={h4style}>Event Color:</h4>
                    <input type="color" id="picker"  value={rgb} onChange={e => changeRGB(e.target.value)}/>
                </div>
                <button>Add Event</button>
        </div>
    )
}

export default AddEvent;
