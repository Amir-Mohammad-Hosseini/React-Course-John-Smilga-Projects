import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import QUESTIONS from "../data";
const Questions = () => {
  const [questions, setQuestions] = useState(QUESTIONS);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (questionId) => {
    if (activeId === questionId) {
      setActiveId(null);
      return;
    }
    setActiveId(questionId);
  };
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => (
        <SingleQuestion
          key={question.id}
          {...question}
          activeId={activeId}
          onToggle={toggleQuestion}
        />
      ))}
    </section>
  );
};

export default Questions;
