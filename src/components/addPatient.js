 import axios from "axios";
import {useState} from "react";


const AddPatient = ({handleCancelBtn}) => {
    const[first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [blood_group, setBloodGroup] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(first_name, last_name, blood_group);
        const res =await axios.post('http://127.0.0.1:8000/patient/', {first_name,last_name,blood_group})
        console.log(res)
        setFirstName('')
        setLastName('')
        setBloodGroup('')
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type={'text'} placeholder={'First Name'} value={first_name} onChange={(event) => setFirstName(event.target.value)} />
            <input type={'text'} placeholder={'Last Name'} value={last_name} onChange={(event) => setLastName(event.target.value)} />
            <input type={'text'} placeholder={'Blood Group'} value={blood_group} onChange={(event) => setBloodGroup(event.target.value)} />
            <div>
                <button type={'submit'}>Add Patient</button>
                <button type={'button'} onClick={handleCancelBtn}>Cancel</button>
            </div>
        </form>

        </>
    )


}

export default AddPatient;