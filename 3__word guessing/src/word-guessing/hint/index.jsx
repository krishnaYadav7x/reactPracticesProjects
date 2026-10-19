import React from 'react'
import Input from '../components/Input'
import Text from '../components/Text'
import './style.css'

export default function Hint({ questions, activeIndex, selectedKey }) {
  return (
    <div className="hint">
      {questions.map((question, i) => {
        if (i !== activeIndex) return;
        return question.options.split("").map((char, i) => {
          return char === "_" ? (
            <Input key={i} value={char} />
          ) : (
            <Text label={char} key={i} />
          );
        });
      })}
    </div>
  );
}
