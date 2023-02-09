import axios from "axios";
const API=axios.create( {baseURL: 'http://localhost:5000'})


API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
}


  return req;
})

export const fetchListing= (type) => API.get(`/post/${type}`);
export const createListing= (formData) => API.post('/post/create',formData)
export const deleteListing = (id) => API.delete(`/post/delete/${id}`)