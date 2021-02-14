import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  FlatList,
} from 'react-native';
import {getUserList} from '../api';
import ListItem from '../presentations/ListItem';
import {SCREEN} from './../const';

const HomeScreen = ({navigation}) => {
  const [userList, setUserList] = useState([]);

  const getUsers = useCallback(async () => {
    const list = await getUserList();
    setUserList(list);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleItemPress = (item) =>
    navigation.navigate(SCREEN.DETAILS, {userName: item.login});

  const renderItem = ({item}) => (
    <ListItem item={item} onPress={handleItemPress} />
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FlatList
          data={userList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View style={styles.footerStyle} />}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  footerStyle: {
    height: 200,
  },
});

export default HomeScreen;
