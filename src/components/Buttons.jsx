const Buttons = (props) => {
return (
    <div className="buttons">
        <button onClick={props.setTimeRange(props.hour)}>HR</button>
        <button onClick={props.setTimeRange(props.day)}>D</button>
        <button onClick={props.setTimeRange(props.prices)}>WK</button>
    </div>
    )
}

export default Buttons