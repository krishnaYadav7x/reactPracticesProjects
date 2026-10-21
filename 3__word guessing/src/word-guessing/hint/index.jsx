import React from 'react'
import Input from '../components/Input'
import Text from '../components/Text'
import './style.css'

export default function Hint({
  questionsData,
  activeIndex,
  selectedKey,
  setSelectedKey,
  setQuestionsData,
  handleHint,
  setInputIndex,
}) {
  function handleInputValue(i) {
    
    return (value) => {
      handleHint(value, i);
      
    };
  }
  function handleFocus(i) {
    return () => {
      setInputIndex(i);
    };
  }
  return (
    <div className="hint">
      {questionsData.map((question, i) => {
        if (i !== activeIndex) return;
        return question.options.split("").map((char, i) => {
          return char === "_" ? (
            <Input
              key={i}
              value={char}
              handleInputValue={handleInputValue(i)}
              onFocus={handleFocus(i)}
            />
          ) : (
            <Text label={char} key={i} />
          );
        });
      })}
    </div>
  );
}
