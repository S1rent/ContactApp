import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IContactData} from './types';

interface ContactSliceInitialState {
  contacts: IContactData[];
}

const initialState: ContactSliceInitialState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<IContactData[]>) => {
      state.contacts = action.payload;
    },
  },
});

export const {setContacts} = contactSlice.actions;
export default contactSlice.reducer;
