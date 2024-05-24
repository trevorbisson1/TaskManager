import "./header.scss"

const Header = () => {
    return (
        <div className="Header-Wrapper">
            <div className="Title">
                <h1>Event Tracker!</h1>
                <h5>By: Trevor Bisson</h5>
            </div>

            <div className="LoginSection">
                <a href="/"> Login / Register</a>
            </div>
        </div>
    )
}

export default Header;