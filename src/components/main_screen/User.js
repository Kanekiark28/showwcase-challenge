import React from "react";
import Modal from "./Modal";
import {useLocation} from "react-router-dom";
import {useEffect,useState} from "react";



function User(props){
    const location = useLocation();
    const [name, getName] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    

    
    useEffect( () => {
        if (location.name){
        getName(location.name.name);
        }else{
            getName("")
        }
    },[location]);

    return(
        <div>
            <h2> Welcome to {name}'s education page. </h2>
            <button onClick={() => setIsOpen(true)}>
                Add New Education
            </button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            </Modal>
        </div>
        
    )


}

export default User;
