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
  const [options,setOptions]= useState([]);
  const getQuiz = async () => {
    const url =
      'https://opentdb.com/api.php?amount=10&category=23&type=multiple&encode=url3986';
    const res = await fetch(url);

    const data = await res.json();
    //console.log(data.results[0].incorrect_answers);
    setQuestions(data.results);
    console.log(data.results[0])
   generateOptionsAndShuffle(data.results[0]);
  };
  useEffect(() => {
    getQuiz();
  }, []);

  // handleNext
  const handleNextPress = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const generateOptionsAndShuffle =(_question)=> {
      const options= [..._question.incorrect_answer]
      options.push(_question.correct_answer);
      console.log(options);
  }

  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>
              Q. {decodeURIComponent(questions[questionNumber].question) }
            </Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>optionButton 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>optionButton 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>optionButton 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>optionButton 4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>
            {questionNumber < 9 && (
              <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                <Text style={styles.buttonText}>NEXT</Text>
              </TouchableOpacity>
            )}

            {questionNumber == 9 && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Result')}>
                <Text style={styles.buttonText}>END</Text>
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
