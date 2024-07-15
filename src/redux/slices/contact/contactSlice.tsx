import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IContactData} from './types';

interface ContactSliceInitialState {
  contacts: IContactData[];
  searchKey: string;
  createData: IContactData;
  selectedItemId?: string;
  selectedItem?: IContactData;
  editData: IContactData;
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
  selectedItemId: undefined,
  selectedItem: undefined,
  editData: initialCreateData,
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
    setSelectedItemId: (state, action: PayloadAction<string>) => {
      state.selectedItemId = action.payload;
    },
    setSelectedItem: (state, action: PayloadAction<IContactData>) => {
      state.selectedItem = action.payload;
    },
    setEditData: (state, action: PayloadAction<IContactData>) => {
      state.editData = action.payload;
    },
  },
});

export const {
  setContacts,
  setSearchKey,
  setCreateData,
  setSelectedItemId,
  setSelectedItem,
  setEditData,
} = contactSlice.actions;
export default contactSlice.reducer;
