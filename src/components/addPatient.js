    import axios from "axios";
    import { useState } from "react";
    import "../App.css";

    const AddPatient = ({ handleCancelBtn }) => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [blood_group, setBloodGroup] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!first_name || !last_name || !blood_group) {
        alert("Please fill in all fields.");
        return;
        }

        try {
        const res = await axios.post("http://127.0.0.1:8000/patient/", {
            first_name,
            last_name,
            blood_group,
        });
        console.log("Added:", res.data);
        setFirstName("");
        setLastName("");
        setBloodGroup("");
        } catch (error) {
        if (error.response) {
            console.error("Backend error:", error.response.data);
            alert("Error: " + JSON.stringify(error.response.data));
        } else {
            console.error("Error:", error.message);
        }
        }
    };

    return (
        <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form-title">Add Patient</h2>
            <input
            className="form-input"
            type="text"
            placeholder="First Name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            />
            <input
            className="form-input"
            type="text"
            placeholder="Last Name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            />
            <input
            className="form-input"
            type="text"
            placeholder="Blood Group"
            value={blood_group}
            onChange={(e) => setBloodGroup(e.target.value)}
            />
            <div className="form-buttons">
            <button type="submit" className="btn btn-primary">Add</button>
            <button type="button" className="btn btn-secondary" onClick={handleCancelBtn}>Cancel</button>
            </div>
        </form>
        </div>
    );
    };

    export default AddPatient;
