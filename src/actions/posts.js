
import { FETCH_ALL, CREATE } from '../constants/actionTypes';

import * as api from '../api';
// Action Creators

export const getPosts = () =>  (dispatch) => {
  try {
    const { data } =  api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };