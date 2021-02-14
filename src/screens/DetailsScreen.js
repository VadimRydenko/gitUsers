import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';

import {getFollowers} from '../api';

import ListItem from '../presentations/ListItem';

const DetailsScreen = ({route}) => {
  const {userName} = route.params;
  const [followersList, setList] = useState([]);

  const getItems2 = useCallback(async () => {
    const userList = await getFollowers(userName);
    setList(userList);
  }, []);

  useEffect(() => {
    getItems2();
  }, [getItems2]);

  const renderItem = ({item}) => <ListItem item={item} />;

  return (
    <SafeAreaView>
      <FlatList
        data={followersList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<View style={styles.footerStyle} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footerStyle: {
    height: 200,
  },
});

export default DetailsScreen;
