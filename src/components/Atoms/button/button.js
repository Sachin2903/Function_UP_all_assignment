export function Button(props){
    return <button onClick={props.btnclickfun} className={props.btnclass}>{props.btnname}</button>
}