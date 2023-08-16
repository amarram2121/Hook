import React, { useReducer } from 'react'
import './style.css';


const render = (state, action) => {
    if (action.type === 'INCR') {
        state += 1;
    }
    if (state > 0 && action.type === 'DECR') {
        state -= 1;
    }
    return state;
}
const UseReducer = () => {
    const initialData = 10;
    const [state, dispatch] = useReducer(render, initialData);
    return (
        <>
            <div>

                <div className="center_div">
                    <p>{state}</p>
                    <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        INCR
                    </div>
                    <div
                        class="button2" onClick={() => dispatch({ type: "DECR" })}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        DECR
                    </div>
                </div>

            </div>
        
        </>

    )
}

export default UseReducer