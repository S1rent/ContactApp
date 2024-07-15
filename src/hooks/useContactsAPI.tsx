import axios from 'axios';
import {ApiEndpoints, baseUrl} from '../constants';
import {useCallback} from 'react';
import {IContactData} from '../redux/slices/contact/types';

export const useContactsAPI = () => {
  const fetchContacts = useCallback(async () => {
    try {
      const response = await axios.get(`${baseUrl}/${ApiEndpoints.Contact}`);
      return response;
    } catch (error: any) {
      console.error(`Error Fetch Contacts: ${error.message}`);
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
  };
};
