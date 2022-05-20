import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
const Quiz = ({navigation}) => {
  // fetch questions
  const [questions, setQuestions] = useState();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [options, setOptions] = useState([]);
  const [score,setScore]= useState(0);
  const getQuiz = async () => {
    const url =
      'https://opentdb.com/api.php?amount=10&category=23&type=multiple&encode=url3986';
    const res = await fetch(url);

    const data = await res.json();
    //console.log(data.results[0].incorrect_answers);
    setQuestions(data.results);
    console.log(data.results[0]);
    setOptions(generateOptionsAndShuffle(data.results[0]));
  };
  useEffect(() => {
    getQuiz();
  }, []);

  // handleNext
  const handleNextPress = () => {
    setQuestionNumber(questionNumber + 1);
    setOptions(generateOptionsAndShuffle(questions[questionNumber+1]))
  };
  
  const handleShowResult =()=>{
      navigation.navigate('Result',{
          score: score
      });
  }
  const generateOptionsAndShuffle = _question => {
    //console.log(_question.incorrect_answers);
    const shuffledOptions = [..._question.incorrect_answers];
    shuffledOptions.push(_question.correct_answer);
    console.log(shuffledOptions);
    shuffleArray(shuffledOptions);
    console.log(shuffledOptions);
    return shuffledOptions;
  };

  const handleSelectedOption = (_option)=>{
      console.log(_option===questions[questionNumber].correct_answer);
        if(_option===questions[questionNumber].correct_answer){
            setScore(score+10);
        }
        if(questionNumber<9){
        setQuestionNumber(questionNumber + 1);
        setOptions(generateOptionsAndShuffle(questions[questionNumber+1]))
        }
    }
  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>
              Q. {decodeURIComponent(questions[questionNumber].question)}
            </Text>
          </View>
          <View style={styles.options}>
              {
                  options.map((option,index)=>{
                      return (
                        <TouchableOpacity 
                        key={index}
                        onPress={()=> handleSelectedOption(option)} style={styles.optionButton}>
                        <Text style={styles.option}>{decodeURIComponent(option)}</Text>
                      </TouchableOpacity>
                      )
                  })
              }
            {/* <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>{options[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>optionButton 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>optionButton 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>optionButton 4</Text>
            </TouchableOpacity> */}
          </View>
          <View style={styles.bottom}>
            {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity> */}
            {questionNumber < 9 && (
              <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity>
            )}

            {questionNumber >= 9 && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleShowResult}>
                <Text style={styles.buttonText}>RESULT</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  bottom: {
    marginBottom: 12,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  options: {
    marginVertical: 15,
    flex: 1,
  },
  optionButton: {
    backgroundColor: '#34A0AA',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: '4%',
  },
  option: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  parent: {
    height: '100%',
  },
  question: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
  },
  top: {
    marginVertical: 15,
  },
});
