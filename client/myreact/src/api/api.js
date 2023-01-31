import axios from 'axios';

const BASEURL = 'http://localhost:5000/'

const posturl = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(posturl);