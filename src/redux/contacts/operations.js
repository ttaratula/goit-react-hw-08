
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.goit.global';
axios.defaults.baseURL = 'https://6845aa33fc51878754dbeb71.mockapi.io/'; 



export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('No token');
    }

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Add Contact
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('No token');
    }

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      const res = await axios.post('/contacts', contact);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Delete Contact
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('No token');
    }

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId; // повертаємо ID, бо бекенд нічого не повертає
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Edit Contact
export const editContact = createAsyncThunk(
  'contacts/edit',
  async (values, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('No token');
    }

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      const { id, name, number } = values;
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
