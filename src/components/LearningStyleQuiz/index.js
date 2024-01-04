import React, { useState } from "react";

import { questions, learningStyles } from "./data";
import styles from "./styles.module.css";

const LearningStyleQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuiz, setShowQuiz] = useState(true);
  const [scores, setScores] = useState({
    V: 0,
    A: 0,
    L: 0,
    P: 0,
    M: 0,
    S: 0,
    I: 0,
  });

  const handleAnswer = (value) => {
    setScores({ ...scores, [value]: scores[value] + 1 });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowQuiz(false);
    }
  };

  const showResults = () => {
    const maxScoreStyle = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    return (
      <div>
        <p>
          Your dominant learning style is:{" "}
          <strong>{learningStyles[maxScoreStyle].style}</strong>
        </p>
        <p>{learningStyles[maxScoreStyle].explanation}</p>
      </div>
    );
  };

  return (
    <div className="quiz-container">
      {showQuiz ? (
        <>
          <div className="status">
            <p>
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <p>{questions.length - currentQuestion - 1} questions remaining</p>
          </div>
          <div className="question">
            <h2>{questions[currentQuestion].text}</h2>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className={styles.optionButton}
                >
                  {option.option}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="results">
          <h2>Quiz Completed!</h2>
          {showResults()}
        </div>
      )}
    </div>
  );
};

export default LearningStyleQuiz;
