import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const User = () => {
  return (
    <View style={styles.container}>
      <Text>User</Text>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
})