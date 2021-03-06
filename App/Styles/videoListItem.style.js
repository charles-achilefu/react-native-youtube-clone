import {
  Dimensions,
  StyleSheet,
} from 'react-native';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
     flex: 1,
     width: screen.width
   },
   listItem: {
     alignItems: 'center',
     justifyContent: 'center',
     padding: 20,
     borderColor: '#e1e2e3',
     borderBottomWidth: 1,
     flex: 1
   },
   videoImage: {
     width: screen.width - 40,
     padding: 20,
     height: 180
   },
   videoContainer: {
     flex: 1,
     flexDirection: 'row',
     paddingTop: 10,
   },
   videoIconChannelContainer: {
     flex: 1,
     justifyContent: 'flex-start',
   },
   videoIconChannel: {
     backgroundColor: 'gray',
     width: 44,
     height: 44,
     borderRadius: 22,
   },
   videoTextContainer: {
     flex: 4,
     marginLeft: -10,
     paddingTop: 5,
   },
   videoTitle: {
     fontSize: 16,
     fontWeight: '400',
   },
   videoDescription: {
     fontSize: 12,
     color: 'grey'
   }
});

module.exports = styles;
