const Buttons = (props) => {

  return (
    <div className="buttons">
        <button onClick={() => {props.handleClick(props.hour)}}>HR</button>
        <button onClick={() => {props.handleClick(props.day)}}>D</button>
        <button onClick={() => {props.handleClick(props.week)}}>WK</button>
    </div>
  );
};

export default Buttons;