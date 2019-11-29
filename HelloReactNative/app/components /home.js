import React, {Component} from 'react';
import {connect} from 'react-redux';
import {alertActions, msgActions} from '@actions';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import FriendsList from './friendsList';
const friends = [
  {
    id: 1,
    firstName: 'Jane',
    lastName: 'Miller',
    avatarUrl: 'https://placehold.it/100x100',
  },
  {
    id: 2,
    firstName: 'Kate',
    lastName: 'Smith',
    avatarUrl: 'https://placehold.it/100x100',
  },
  {
    id: 3,
    firstName: 'Kevin',
    lastName: 'Yang',
    avatarUrl: 'https://placehold.it/100x100',
  },
];
class Home extends Component {
  state = {text: 'h'};

  buttonClick = () => {
    this.props.sendMessage('sucess');
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <FriendsList friends={friends} />
        </SafeAreaView>
      </>
    );
  }
}

function mapState(state) {
  const {message} = state;
  return {message: message.message};
}
const actionCreators = {
  success: alertActions.success,
  error: alertActions.error,
  clear: alertActions.clear,
  sendMessage: msgActions.sendMessage,
};
export default connect(mapState, actionCreators)(Home);
//export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
