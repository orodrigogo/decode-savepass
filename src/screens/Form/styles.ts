import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F3F5',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    padding: 24,
  },
  content: {
    width: '100%',
  },
  footer: {
    width: '100%',
    padding: 24,
    marginBottom: getBottomSpace() + 24
  }
});
