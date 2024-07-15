import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IContactData} from './types';

interface ContactSliceInitialState {
  contacts: IContactData[];
  searchKey: string;
}

const initialState: ContactSliceInitialState = {
  contacts: [],
  searchKey: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<IContactData[]>) => {
      state.contacts = action.payload;
    },
    setSearchKey: (state, action: PayloadAction<string>) => {
      state.searchKey = action.payload;
    },
  },
});

export const {setContacts, setSearchKey} = contactSlice.actions;
export default contactSlice.reducer;
