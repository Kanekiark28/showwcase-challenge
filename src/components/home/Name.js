import React from "react";
import {useHistory} from "react-router-dom";

function Name(){

    const [isMousedOver, setMousedOver] = React.useState(false);
    const [name, nameChanged] = React.useState("");
    const history = useHistory();
    

    function handleMouseOver(){
        setMousedOver(true);
    }
    function handleMouseOut(){
        setMousedOver(false);
    }

    function handleChange(event){
        nameChanged(event.target.value)
    }

    function handleClick(){
        console.log(name)
        history.push({
            pathname: "/education",
            name: {name}
        });
    }


    return(
        <div>
            <h2>Type your name and click "Enter" to begin!</h2>
            <input placeholder="Your Name" type="text" onChange={handleChange}/>
            <button style={{backgroundColor: isMousedOver ? "black": "white"}}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}>Submit
            </button>
        </div>
        
    );
}

export default Name;