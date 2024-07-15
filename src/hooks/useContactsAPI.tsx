import axios from 'axios';
import {ApiEndpoints, baseUrl} from '../constants';
import {useCallback, useState} from 'react';
import {
  IContactData,
  IGetContactResponseWrapper,
} from '../redux/slices/contact/types';
import {useDispatch, useSelector} from 'react-redux';
import {
  initialCreateData,
  setContacts,
  setCreateData,
} from '../redux/slices/contact/contactSlice';
import {RootState} from '../redux/store';

export const useContactsAPI = () => {
  const dispatch = useDispatch();
  const {createData} = useSelector((state: RootState) => state.contact);
  const [isLoading, setIsLoading] = useState(true);

  const fetchContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${baseUrl}/${ApiEndpoints.Contact}`);
      const data: IGetContactResponseWrapper = response.data;

      dispatch(setContacts(data.data));

      return data.data;
    } catch (error: any) {
      console.error(`Error Fetch Contacts: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addContact = useCallback(async () => {
    try {
      const response = await axios.post(`${baseUrl}/${ApiEndpoints.Contact}`, {
        ...createData,
        id: undefined,
      });
      dispatch(setCreateData(initialCreateData));
      return response.status >= 200 && response.status <= 299;
    } catch (error: any) {
      console.error(`Error Add Contact: ${error.message}`);
    }
  }, [createData]);

  const deleteContact = useCallback(async (id: string) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/${ApiEndpoints.Contact}/${id}`,
      );
      return response;
    } catch (error: any) {
      console.error(`Error Delete Contact: ${error.message}`);
    }
  }, []);

  const fetchContactDetail = useCallback(async (id: string) => {
    try {
      const response = await axios.get(
        `${baseUrl}/${ApiEndpoints.Contact}/${id}`,
      );
      return response;
    } catch (error: any) {
      console.error(`Error Fetch Contact Detail: ${error.message}`);
    }
  }, []);

  const editContact = useCallback(async (id: string, param: IContactData) => {
    try {
      const response = await axios.put(
        `${baseUrl}/${ApiEndpoints.Contact}/${id}`,
        param,
      );
      return response;
    } catch (error: any) {
      console.error(`Error Edit Contact: ${error.message}`);
    }
  }, []);

  return {
    fetchContacts,
    addContact,
    deleteContact,
    fetchContactDetail,
    editContact,
    isLoading,
  };
};
