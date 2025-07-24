import axios from 'axios'

export function getPatient(){
    return axios.get('http://127.0.0.1:8000/patient/')
        // .then((res) => res.data)


}
export function deletePatient(id){
    return axios.delete('http://127.0.0.1:8000/patient/' + id +'/')
      // .then((res) => res.data)
}
