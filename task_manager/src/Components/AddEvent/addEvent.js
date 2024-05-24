import react, {useState,useEffect} from "react";
import "./addEvent.scss"

const AddEvent = () => {

    const [timeLength,changeTimeLength] = useState(0);

    const [rgb,changeRGB] = useState({
        red:0,
        green:0,
        blue:0
    })

    const inputTimeChangeHandler=(e)=>{
        changeTimeLength((prevState)=>{
            return{...prevState,[e.target.timeLength]:e.target.value}
        })
    }
    
    const inputRedColorChangeHandler=(e)=>{
        changeRGB((prevState)=>{
            return{...prevState,[e.target.red]:e.target.value}
        })
    }

    const inputBlueColorChangeHandler=(e)=>{
        changeRGB((prevState)=>{
            return{...prevState,[e.target.blue]:e.target.value}
        })
    }

    const inputGreenColorChangeHandler=(e)=>{
        changeRGB((prevState)=>{
            return{...prevState,[e.target.green]:e.target.value}
        })
    }

    return (
        <div className="Add-Event">
            <form className="Form-Wrapper">
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
                    <input type="range" min="0" max="240" step="5" value={timeLength} onChange={(e) => changeTimeLength(e.target.value)}/>
                    <h5>{timeLength} minutes</h5>
                </div>
                <div className="section">
                    <h5>Description:</h5>
                    <input className="description"></input>
                </div>
                <div className="color-section">
                    <h4>Event Color:</h4>
                    <h5>Red:</h5>
                    <input type="range" min="0" max="255" step="1" value={timeLength} onChange={inputRedColorChangeHandler}/>
                    <h5>Blue:</h5>
                    <input type="range" min="0" max="255" step="1" value={timeLength} onChange={inputBlueColorChangeHandler}/>
                    <h5>Green:</h5>
                    <input type="range" min="0" max="255" step="1" value={timeLength} onChange={inputGreenColorChangeHandler}/>

                </div>
                <button>Add Event</button>
            </form>
        </div>
    )
}

export default AddEvent;
