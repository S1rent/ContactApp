import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IContactData} from './types';

interface ContactSliceInitialState {
  contacts: IContactData[];
  searchKey: string;
  createData: IContactData;
}

export const initialCreateData: IContactData = {
  id: '',
  firstName: '',
  lastName: '',
  age: 0,
  photo: '',
};

const initialState: ContactSliceInitialState = {
  contacts: [],
  searchKey: '',
  createData: initialCreateData,
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
    setCreateData: (state, action: PayloadAction<IContactData>) => {
      state.createData = action.payload;
    },
  },
});

export const {setContacts, setSearchKey, setCreateData} = contactSlice.actions;
export default contactSlice.reducer;
