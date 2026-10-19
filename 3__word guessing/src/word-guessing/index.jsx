import  { useState } from 'react'
import Hint from './hint';
import Score from './score';
import AnswerStatus from './answer-status';
import QuestionController from './controller';
import Keyboard from './keyboard';
import { questions } from './constant';

const START_INDEX = 0
const keyboardLetterLength = Array.from({length:26})
export default function WordGuessingGame() {
  const [questionsData, setQuestionsData] = useState(structuredClone(questions));
  const [activeIndex,setActiveIndex] = useState(START_INDEX)
  const [selectedKey,setSelectedKey] = useState({})
  console.log(selectedKey);
  function handleNext(){
    setActiveIndex(activeIndex+1)
  }
  function handlePrev(){
    setActiveIndex(activeIndex - 1);
  }
  function handleKeyboard(key,index){
    console.log(index,key);
  }
  return (
    <div className="word-guessing-game">
      <Hint
        questions={questions}
        activeIndex={activeIndex}
        selectedKey={selectedKey}
      />
      <Score />
      <AnswerStatus />
      <QuestionController
        handleNext={handleNext}
        handlePrev={handlePrev}
        questions={questions}
        activeIndex={activeIndex}
      />
      <Keyboard
        keyboardLetterLength={keyboardLetterLength}
        handleKeyboard={handleKeyboard}
      />
    </div>
  );
}
