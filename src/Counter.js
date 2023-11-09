import {connect } from "react-redux";


function inCerementCounter(num){
    return{
        type : "INCEREMET" ,
        num : num
    }
}
function deCerementCounter(num){
    return{
        type : "DECEREMET",
        num : num
    }
}

function mapStateToProps(state){
    return{
        count : state.count
    }
}
const mapDispatchToProps = {
    inCerementCounter , 
    deCerementCounter
}

function Counter(props){
    function incerementHandler(){
        props.inCerementCounter(1);
    }
    function decerementHandler(){
        props.inCerementCounter(2);
    }
    return(
        <div>
            <h1>{props.count}</h1>
            <div>
                <button onClick={incerementHandler}>+</button>
                <button onClick={decerementHandler}>-</button>
            </div>
        </div>
    )
}

export default connect(mapStateToProps , mapDispatchToProps)(Counter) ;