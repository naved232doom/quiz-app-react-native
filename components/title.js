import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizzer</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: '500',
        color: '#000'
    },
    container:{
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }
})