import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = ({navigation}) => {
  return (
      <View style={styles.container}>
    <View>
      <Title/>
    </View>
    <View style={styles.bannerContainer}>
    <Image source={{uri: 'https://thumbs.dreamstime.com/b/quiz-your-computer-screen-answer-choices-vector-illustration-interesting-147620425.jpg'}}
        style={styles.banner}
        resizeMode='contain'
        />
    </View>
    <View>
          <TouchableOpacity
          style={styles.button}
          onPress={()=> navigation.navigate('Quiz')}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
    
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner:{
        height: 300,    
    },
    bannerContainer:{
        margin: '5%',
        flex: 1
    },
    container:{
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%'
    },
    button:{
        width: '100%',
        backgroundColor: '#1A759F',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: '4%'
    },
    buttonText:{
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    }
})