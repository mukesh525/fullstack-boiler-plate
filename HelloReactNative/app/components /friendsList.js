import React, {Component} from 'react';
import {Image, FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    flex: 1,
    backgroundColor: 'grey',
  },
  friend: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },
  avatar: {
    margin: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontSize: 18,
    color: '#000',
  },
});

export default class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: props.friends,
    };
  }

  renderItem = ({item,index}) => {
    return (
      <View style={styles.friend}>
        <Image style={styles.avatar} source={{uri: item.avatarUrl}} />
        <Text style={styles.name}>
          {item.firstName} {item.lastName}
        </Text>
      </View>
    );
  };

  render() {
    let {friends} = this.state;
    return (
      <FlatList
        data={friends}
        style={styles.list}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    );
  }
}
