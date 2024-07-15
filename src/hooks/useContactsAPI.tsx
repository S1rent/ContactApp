import axios from 'axios';
import {ApiEndpoints, baseUrl} from '../constants';
import {useCallback, useState} from 'react';
import {
  IContactData,
  IGetContactResponseWrapper,
} from '../redux/slices/contact/types';
import {useDispatch} from 'react-redux';
import {setContacts} from '../redux/slices/contact/contactSlice';

export const useContactsAPI = () => {
  const dispatch = useDispatch();
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

  const addContact = useCallback(async (param: IContactData) => {
    try {
      const response = await axios.post(
        `${baseUrl}/${ApiEndpoints.Contact}`,
        param,
      );
      return response;
    } catch (error: any) {
      console.error(`Error Add Contact: ${error.message}`);
    }
  }, []);

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
