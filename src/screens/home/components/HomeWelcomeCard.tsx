import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from '../../../components/Card';
import {colors} from '../../../constants';
import MaterialCommunityIcon from '../../../components/MaterialCommunityIcon';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';

const HomeWelcomeCard: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contact.contacts);

  const getTimeGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Night';
    }
  };

  return (
    <Card>
      <View style={styles.containerView}>
        <MaterialCommunityIcon
          name="account-circle"
          size={72}
          color={colors.Black}
        />
        <View style={styles.mainInformationView}>
          <Text
            style={
              styles.greetingLabel
            }>{`${getTimeGreeting()},\nBeautiful People!`}</Text>
          <Text style={styles.contactCounterLabel}>
            {contacts.length}
            {` ${contacts.length === 1 ? 'contact' : 'contacts'}`}
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default HomeWelcomeCard;

const styles = StyleSheet.create({
  greetingLabel: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.Black,
  },
  contactCounterLabel: {
    fontWeight: '400',
    fontSize: 16,
    color: colors.GrayC0C1C1,
  },
  containerView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainInformationView: {
    marginLeft: 8,
  },
});
