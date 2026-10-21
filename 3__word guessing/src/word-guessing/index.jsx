import { useEffect, useState } from "react";
import Hint from "./hint";
import Score from "./score";
import AnswerStatus from "./answer-status";
import QuestionController from "./controller";
import Keyboard from "./keyboard";
import { questions } from "./constant";

const START_INDEX = 0;
const keyboardLetterLength = Array.from({ length: 26 });
export default function WordGuessingGame() {
  const [questionsData, setQuestionsData] = useState(
    structuredClone(questions),
  );

  const [activeIndex, setActiveIndex] = useState(START_INDEX);
  const [selectedKey, setSelectedKey] = useState({});
  // console.log(selectedKey);
  const [score, setScore] = useState(0);
  const [clickedKey,setClickedKey] = useState('')
  const [inputIndex,setInputIndex] = useState(null)
  console.log(inputIndex);
  function handleNext() {
    setActiveIndex(activeIndex + 1);
  }
  function handlePrev() {
    setActiveIndex(activeIndex - 1);
  }
  // console.log(clickedKey);
  useEffect(() => {
    setSelectedKey({});
  }, [activeIndex]);

  function handleHint(value='', i) {
    console.log(value,i);
    // console.log(value);
    const letter =  value.slice(-1);

    setSelectedKey((prev) => {
      return { ...prev, [i]: value.slice(-1) };
    });
    setQuestionsData((prev) => {
      return prev.map((qn, index) => {
        if (index !== activeIndex) return qn;
        const options = qn.options.split("");
        if (options[i] === "_") {
         console.log('from keyboard');
          options[i] = letter
        }
        return { ...qn, options: options.join("") };
      });
    });
  }
  function keyboardHandle(pressedKey){
    if(inputIndex===null)return
    handleHint(pressedKey, inputIndex);
  }
  return (
    <div className="word-guessing-game">
      <Hint
        questionsData={questionsData}
        activeIndex={activeIndex}
        selectedKey={selectedKey}
        setSelectedKey={setSelectedKey}
        setQuestionsData={setQuestionsData}
        handleHint={handleHint}
        setInputIndex={setInputIndex}
      />
      <Score score={score} />
      <AnswerStatus />
      <QuestionController
        handleNext={handleNext}
        handlePrev={handlePrev}
        questionsData={questionsData}
        activeIndex={activeIndex}
      />
      <Keyboard
        keyboardLetterLength={keyboardLetterLength}
        keyboardHandle={keyboardHandle}
        setClickedKey={setClickedKey}
      />
    </div>
  );
}
