import {FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import HomeWelcomeCard from './components/HomeWelcomeCard';
import HomeSearchBox from './components/HomeSearchBox';
import HomeNoData from './components/HomeNoData';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {useContactsAPI} from '../../hooks/useContactsAPI';
import {IPageListItem} from '../../types';
import HomeContactListItem from './components/HomeContactList';
import {IContactData} from '../../redux/slices/contact/types';
import LoadingIndicator from '../../components/LoadingIndicator';

const HomeScreen = () => {
  const {fetchContacts, isLoading} = useContactsAPI();
  const {contacts, searchKey} = useSelector(
    (state: RootState) => state.contact,
  );

  useEffect(() => {
    fetchContacts();
  }, []);

  const filteredData = contacts.filter(x =>
    `${x.firstName}${x.lastName}`.toLowerCase().includes(searchKey),
  );

  const components: IPageListItem[] = [
    {
      id: 'home-welcome-card',
    },
    {
      id: 'home-search-box',
    },
    {
      id: 'loading-indicator',
    },
    {
      id: 'home-no-data-view',
    },
    ...(searchKey.length === 0 ? contacts : filteredData),
  ];

  const renderItem = ({item}: {item: IPageListItem}) => {
    if (item.id === 'home-welcome-card') {
      return <HomeWelcomeCard />;
    } else if (item.id === 'home-search-box') {
      return <HomeSearchBox />;
    } else if (item.id === 'home-no-data-view') {
      return (contacts.length === 0 && !isLoading) ||
        (searchKey.length !== 0 && filteredData.length === 0) ? (
        <HomeNoData
          isNotFound={searchKey.length !== 0 && filteredData.length === 0}
        />
      ) : (
        <></>
      );
    } else if (item.id === 'loading-indicator') {
      return isLoading ? <LoadingIndicator /> : <></>;
    }

    return <HomeContactListItem data={item as IContactData} />;
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#0143c2', '#008fe0']}
      style={styles.background}>
      <FlatList
        data={components}
        renderItem={renderItem}
        keyExtractor={(item: IPageListItem) => item.id}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
