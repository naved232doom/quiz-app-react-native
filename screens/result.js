import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Result = ({navigation}) => {
  return (
      <View>
    <View>
      <Text>Result</Text>
    </View>
    <View>
    <Image source={{uri: 'https://thumbs.dreamstime.com/b/quiz-your-computer-screen-answer-choices-vector-illustration-interesting-147620425.jpg'}}
        style={styles.banner}
        resizeMode='contain'
        />
    </View>
    <View>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
            <Text>Home</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%'
    },
    banner:{
        height: 300,    
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    }
})