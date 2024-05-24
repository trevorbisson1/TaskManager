import "./addEvent.scss"

const AddEvent = () => {
    return (
        <div className="Add-Event">
            <form className="Form-Wrapper">
                <h2>Add Another Task!</h2>
                <div className="section">
                    <h4>Event Name: </h4>
                    <input></input>
                </div>
                <div className="section">
                    <h4>Description:</h4>
                    <input></input>
                </div>
                <div className="section">
                    <h4>Proposed Time Length:</h4>
                    <input></input>
                </div>
                <div className="section">
                    <h4>Event Time Start:</h4>
                    <input></input>
                </div>
                <button>Add Event</button>
            </form>
        </div>
    )
}

export default AddEvent;
