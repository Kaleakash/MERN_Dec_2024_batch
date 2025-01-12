import Child3 from "./Child3";

function Child1(props) {

    return(
        <div>
            <h3>Child1 Component <u>{props.fname}</u></h3>
            <Child3 fname={props.fname}/>
        </div>
    )
}

export default Child1;