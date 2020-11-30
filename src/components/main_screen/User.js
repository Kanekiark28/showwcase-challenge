import React from "react";
import {useLocation} from "react-router-dom";
import {useEffect,useState} from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";



function User(props){
    const location = useLocation();
    const [name, getName] = useState("");


    useEffect( () => {
        getName(location.name.name);
    },[location]);
    return(
        <div>
            <h2> Welcome to {name}'s education page. </h2>
            <Button >
                Add New Education
            </Button>
        </div>
        
    )


}

export default User;