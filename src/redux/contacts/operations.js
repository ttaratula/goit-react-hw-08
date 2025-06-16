
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/api'; 

// axios.defaults.baseURL = 'https://connections-api.goit.global';


import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6845aa33fc51878754dbeb71.mockapi.io/',
});

export default instance;


// FETCH CONTACTS
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('No token');
    }

    try {
      const res = await axiosInstance.get('/contacts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// ADD CONTACT
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('No token');
    }

    try {
      const res = await axiosInstance.post('/contacts', contact, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE CONTACT
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('No token');
    }

    try {
      await axiosInstance.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return contactId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// EDIT CONTACT
export const editContact = createAsyncThunk(
  'contacts/edit',
  async ({ id, name, number }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('No token');
    }

    try {
      const res = await axiosInstance.patch(`/contacts/${id}`, { name, number }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
