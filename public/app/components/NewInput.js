export default (props) => {
    return (
        <div>
            <input type="text" value={props.default} onChange={props.onchange} />
            <button onClick={props.onclick}>{props.btnText}</button>
        </div>
    );
}