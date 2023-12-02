import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await fetch('656b661cdac3630cf7280f54');
  const data = await response.json();
  return data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const response = await fetch('656b661cdac3630cf7280f54', {
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
  await fetch(`656b661cdac3630cf7280f54/${contactId}`, {
    method: 'DELETE',
  });
  return contactId;
});

export const updateFilter = createAction('filter/updateFilter');