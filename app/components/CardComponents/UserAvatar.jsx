import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import colors from '../../const/colors'

export default function UserAvatar({ link }) {
  return (
    <View className="" style={styles.container}>
      <Image 
        source={{ uri: link }}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 55,
  },
  container:{
	width:120,
	height:120,
	borderRadius:60,
    borderWidth:4,
    borderColor:colors.primary,
	padding:4
  }
});
