import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await fetch('https://mockapi.io/clone/656dfcf7bcc5618d3c245cca');
  const data = await response.json();
  return data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const response = await fetch('https://mockapi.io/clone/656dfcf7bcc5618d3c245cca', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  });
  const data = await response.json();
  return data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  await fetch(`https://mockapi.io/clone/656dfcf7bcc5618d3c245cca${contactId}`, {
    method: 'DELETE',
  });
  return contactId;
});

export const updateFilter = createAction('filter/updateFilter');