 import axios from 'axios';

const  URL = "http://localhost:8000";

 export const createPost = async (post) => {
   //const url = "http://localhost:8000";

   try {
    return await axios.post(`${URL}/create`, post);
   } catch(error){
       console.log('Error while  calling createPost API', error);
   }
   
}
 
//calling posts
export const getAllPosts = async(param) => {
  try {
      let response = await axios.get(`${URL}/posts${param}`);
      return response.data;
  } catch (error) {
      console.log('Error while calling getPosts API ', error)
  }
}

// posts

export const getPost = async(id) => {
  try{
    let response = await axios.get(`${URL}/post/${id}`);
     return response.data;
  }
  catch(error) {
    console.log("Error while calling getPost API", error);
  }
}

// updatePost
 export const updatePost =async(id,post) => {
   try{
   await axios.post(`${URL}/update/${id}`,post);
}
   catch(error){
     console.log("Error while calling updatePost Api",error);
   }
 }
//deletePost
 export const deletePost = async(id) =>{
   try{
    await axios.delete(`${URL}/delete/${id}`);
   }
   catch(error){
     console.log("Error while calling deletePost Api".error)
   }
 }