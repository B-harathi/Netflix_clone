import React, { useState } from 'react';
import QuestionAnswer from './QuestionAnswer';

const App = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index);
  };

  return (
    <div>
      {QuestionAnswer.map((qa, index) => (
        <div key={index} onClick={() => handleQuestionClick(index)}>
          <h3>{qa.question}</h3>
          {selectedQuestion === index && <QuestionAnswer answer={qa.answer} />}
        </div>
      ))}
    </div>
  );
};

export default App;
