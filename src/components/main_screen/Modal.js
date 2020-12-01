import React,{useState} from "react";
import us_institutions from "../../data/us_institutions.json";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {majors,degrees,dates} from "../../data/data";
import Education from "./Education";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  color: "#50a3a2",
  zIndex: 1000,
};

const OVERLAY_STYLE = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};


function Modal({ open, children, onClose, getEducation }) {

    const [uniName, setUniName] = useState('')
    const [degree, setDegree] = useState('')
    const [major, setMajor] = useState('')
    const [startDate, setStart] = useState('')
    const [endDate, setEnd] = useState('')

    const [education, addEducation] = useState([]);
    const newArray = []
    const onAddButtonClick = event => {
        education.push(<Education university={uniName} degree={degree} major={major} start={startDate} end={endDate} education={education}/>)
        addEducation(education);
        getEducation(education);
    }


  if (!open) return null;
  return (
    <>
      <div style={OVERLAY_STYLE}>
        <div style={MODAL_STYLES}>
            <h2> Add New Education </h2>
              <Autocomplete
                id="university"
                options={us_institutions}
                onChange = {(event,newUni) => {
                    setUniName(newUni)
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="University Name"
                    margin="normal"
                    variant="outlined"
                  />
                )}
              />
            <Autocomplete
            id="degree"
            options={degrees}
            onChange = {(event, newDeg) => {
                setDegree(newDeg)
            }}
            renderInput={(params) => (
                <TextField
                {...params}
                label="Degree Type"
                margin="normal"
                variant="outlined"
                />
            )}
            />
        

            <Autocomplete
            id="major"
            options={majors}
            onChange = {(event, newMaj) => {
                setMajor(newMaj)
            }}
            renderInput={(params) => (
                <TextField
                {...params}
                label="Major"
                margin="normal"
                variant="outlined"
                />
            )}
            />

            <Autocomplete
            id="start"
            options={dates}
            onChange = {(event, newStart) => {
                setStart(newStart)
            }}
            renderInput={(params) => (
                <TextField
                {...params}
                label="Start Date"
                margin="normal"
                variant="outlined"
                />
            )}
            />

            <Autocomplete
            id="enddate"
            options={dates}
            onChange = {(event, newEnd) => {
                setEnd(newEnd)
            }}
            renderInput={(params) => (
                <TextField
                {...params}
                label="End Date"
                margin="normal"
                variant="outlined"
                />
            )}
            />

            <button onClick={onClose}> Close</button>
            {children}
            <button onClick={onAddButtonClick}> Add </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
