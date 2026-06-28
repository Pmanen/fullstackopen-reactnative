import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

import Text from './Text'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 6,
    paddingBottom: 6,
    backgroundColor: "#24292e",
    minHeight: 32,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>{
      <Pressable onPress={() => null}><Text color="textSecondary" fontSize="subheading">Repositories</Text></Pressable>
    }</View>;
};

export default AppBar;
