import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/title'
// store score in context/redux
const Result = ({navigation,route}) => {
    const score = route.params.score
    console.log(route.params.score);
  return (
      <View style={styles.container}>
    <View>
        <Title heading="Score"/>
        <Title heading={score} />
    </View>
    <View>
    <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tV171l3_gRFaXLssQ_LVCeJ2vlDgUUab2w&usqp=CAU'}}
        style={styles.banner}
        resizeMode='contain'
        />
    </View>
    <View>
        <TouchableOpacity style={styles.button}onPress={()=> navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Home</Text>
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
    },
    button: {
        // width: '100%',
        backgroundColor: '#1A759F',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: '4%',
      },
      buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
      },
})