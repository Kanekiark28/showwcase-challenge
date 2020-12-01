import React from "react";
import Modal from "./Modal";
import {useLocation} from "react-router-dom";
import {useEffect,useState} from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';



function User(props){
    const location = useLocation();
    const [name, getName] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [listOfEducation, getEducation] = useState([])
    

    
    useEffect( () => {
        if (location.name){
        getName(location.name.name);
        }else{
            getName("")
        }
    },[location]);

    return(
        <Jumbotron>
            <h2> Welcome to {name}'s education page. </h2>
            <button onClick={() => setIsOpen(true)}>
                Add New Education
            </button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} getEducation={getEducation}>
            </Modal>
            <div style={{paddingTop: "20px"}}>
            <div style={{backgroundColor: "#303030", margin: "auto", width: "50%", border: "3px solid white"}}>

                {listOfEducation}

            </div>
            </div>
        </Jumbotron>
        
    )


}

export default User;
