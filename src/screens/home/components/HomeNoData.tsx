import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from '../../../components/Card';
import NoDataIllustration from '../../../assets/NoDataIllustration';
import {colors} from '../../../constants';

const HomeNoData: React.FC<{
  isNotFound?: boolean;
}> = ({isNotFound}) => {
  const title = isNotFound
    ? 'Ooops it looks like\nthere is no matching contact.'
    : "Ooops it looks like\nyou don't have any contact.";
  const description = isNotFound
    ? "Why don't try to search other?"
    : "Why don't try to add some?";
  return (
    <Card style={{paddingTop: 8}}>
      <View style={styles.containerView}>
        <NoDataIllustration width={240} height={240} />
        <Text style={styles.mainLabel}>{title}</Text>
        <Text style={styles.descriptionlabel}>{description}</Text>
      </View>
    </Card>
  );
};

export default HomeNoData;

const styles = StyleSheet.create({
  containerView: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    display: 'flex',
    marginBottom: 8,
  },
  descriptionlabel: {
    color: colors.GrayC0C1C1,
    fontWeight: '600',
    textAlign: 'center',
  },
  mainLabel: {
    color: colors.Black,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
