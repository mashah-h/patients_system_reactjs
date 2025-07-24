import '../App.css';
import { useEffect, useState } from "react";
import {deletePatient,getPatient } from "../service/apiservice";
import AddPatient from "./addPatient";

const PatientList = () => {
    const [patients, setPatients] = useState([]);
    const [showAddPatient, setShowAddPatient] = useState(false);

    useEffect(() => {
        getPatient()
            .then((res) => {
                console.log("Patients loaded:", res.data);
                setPatients(res.data);
            })
            .catch((err) => {
                console.error("Error fetching patients:", err);
            });
    }, []);
    const handleCancelBtn= () => {
        setShowAddPatient(false);
        getPatient()
            .then((res) => {
                console.log("Response from API:", res);
                setPatients(res);
            })
    }
    const handleDeleteBtn = (id) => {
        deletePatient(id)
            .then((res) => setPatients(patients.filter(p=>p.patient_id !== id)))
    }





    return (
        <div className='patients-list'>
            <h2>Patients List</h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Blood Group</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {patients.length > 0 ? (
                    patients.map((patient) => (
                        <tr key={patient.patient_id}>
                            <td>{patient.first_name}</td>
                            <td>{patient.last_name}</td>
                            <td>{patient.blood_group}</td>

                            <td>
                                <button className="btn btn-danger" onClick={()=>{handleDeleteBtn()}}>Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No patients found.</td>
                    </tr>
                )}
                </tbody>
            </table>
            <button className='btn btn-success' onClick={()=>{setShowAddPatient(!showAddPatient)}}>Add New</button>
            <br/>
            {showAddPatient && <AddPatient handleCancelBtn={handleCancelBtn}/>}
        </div>
    );
};

export default PatientList;

