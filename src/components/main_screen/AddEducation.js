import React,{useState} from "react";
import {Button,Modal} from "react-bootstrap";


function AddEducation(){
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);

    return(
        <div>
        <Modal
                show={show}
                onHide={handleClose}
                backDrop="static"
            >
            <Modal.Header closeButton>
                <Modal.Title>Add New Education</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary"> Add Education</Button>
            </Modal.Footer>
            </Modal>

        </div>
    )

}

export default AddEducation;