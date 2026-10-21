import React from 'react'
import Button from '../components/Button'
import Text from '../components/Text'
import './style.css'
export default function QuestionController({
  questionsData,
  activeIndex,
  handlePrev,
  handleNext,
}) {
  return (
    <div className="question-controller">
      <Button label="←" disabled={activeIndex === 0} onClick={handlePrev} />
      {questionsData.map((question, i) => {
        return i === activeIndex && <Text key={i} label={question.question} />;
      })}
      <Button
        label="→"
        disabled={activeIndex === questionsData.length - 1}
        onClick={handleNext}
      />
    </div>
  );
}
