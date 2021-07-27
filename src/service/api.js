 import axios from 'axios';

 const URL = 'http://localhost:8000'

 export const createPost = async (post) => {

    try {
    return await axios.post(`${URL}/createPost`, post);
    } catch(error){
        console.log('Error while calling create API', error);
    }
    
 }