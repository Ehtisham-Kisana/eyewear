import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
})