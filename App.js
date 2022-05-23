import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/home'
import Quiz from './screens/quiz'
import Result from './screens/result'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './navigation'
import { ScoreProvider } from './Context/ScoreContext'

const App = () => {
  return (
    <ScoreProvider>
     <NavigationContainer>
       <StackNavigator/>
     </NavigationContainer>
     </ScoreProvider>
   
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
    paddingHorizontal: 16,

  },
})