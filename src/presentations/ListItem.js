import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {Colors} from '../styleGuides';

const {width} = Dimensions.get('window');

const ListItem = ({onPress, item}) => {
  const handleOnPress = () => onPress && onPress(item);
  const {avatar_url, html_url, login} = item;
  return (
    <>
      <TouchableOpacity
        style={styles.listWrapper}
        activeOpacity={1}
        onPress={handleOnPress}>
        <View style={styles.imageContainer}>
          <Image source={{uri: avatar_url}} style={styles.imageSize} />
        </View>
        <View>
          <Text style={styles.headerText} numberOfLines={1}>
            {login}
          </Text>
          <Text numberOfLines={1}>{html_url}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.border} />
    </>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    width,
    height: 120,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 20,
  },
  imageSize: {
    width: 100,
    height: 100,
  },
  headerText: {
    color: Colors.header_green,
    fontWeight: 'bold',
  },
  border: {
    width,
    height: 2,
    backgroundColor: Colors.border_green,
  },
});

export default ListItem;
