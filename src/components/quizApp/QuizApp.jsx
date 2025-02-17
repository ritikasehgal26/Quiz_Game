import React, { useState, useEffect } from "react";
import styles from "./quizApp.module.css";
import { quizQuestions } from "../../questionArray";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentQuestionIndex,
  setSelectedOption,
  setAnswerSelected,
  setShowResult,
} from "../../services/slices";
import Result from "../result/Result";

const QuizApp = () => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, answerSelected, selectedOption, showResult } =
    useSelector((state) => state);

  const [timeLeft, setTimeLeft] = useState(10);
  const [rightAns, setRightAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);

  useEffect(() => {
    if (currentQuestionIndex < quizQuestions.length) {
      setTimeLeft(10);
      dispatch(setAnswerSelected(false));

      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 1) {
            clearInterval(timer);
            moveToNextQuestion();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentQuestionIndex]);

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
      dispatch(setSelectedOption(null));
      dispatch(setAnswerSelected(false));
    }
  };

  const handleOnSubmit = () => {
    dispatch(setShowResult(true));
  };

  const handleOptionChange = (e) => {
    const optionValue = e.target.value;
    dispatch(setSelectedOption(optionValue));
    dispatch(setAnswerSelected(true));
    if (optionValue === currentQuestion.correctAnswer) {
      setRightAns((prev) => prev + 1);
    } else {
      setWrongAns((prev) => prev + 1);
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <>
      <div className={styles.quizContainer}>
        <h1>Quiz App</h1>
        <div className={styles.questionContainer}>
          <div className={styles.timer}>
            <p>Time left: {timeLeft}s</p>
          </div>
          <p>{currentQuestion.question}</p>
          <div className={styles.optionsClass}>
            <div className={styles.options}>
              <label>
                <input
                  type="radio"
                  name={`option-${currentQuestionIndex}`}
                  value="option1"
                  onChange={handleOptionChange}
                  checked={selectedOption === "option1"}
                  className={styles.input}
                />
                {currentQuestion.option1}
              </label>
            </div>

            <div className={styles.options}>
              <label className={styles.options}>
                <input
                  type="radio"
                  name={`option-${currentQuestionIndex}`}
                  value="option2"
                  onChange={handleOptionChange}
                  checked={selectedOption === "option2"}
                  className={styles.input}
                />
                {currentQuestion.option2}
              </label>
            </div>

            <div className={styles.options}>
              <label className={styles.options}>
                <input
                  type="radio"
                  name={`option-${currentQuestionIndex}`}
                  value="option3"
                  onChange={handleOptionChange}
                  checked={selectedOption === "option3"}
                  className={styles.input}
                />
                {currentQuestion.option3}
              </label>
            </div>

            <div className={styles.options}>
              <label className={styles.options}>
                <input
                  type="radio"
                  name={`option-${currentQuestionIndex}`}
                  value="option4"
                  onChange={handleOptionChange}
                  checked={selectedOption === "option4"}
                  className={styles.input}
                />
                {currentQuestion.option4}
              </label>
            </div>
            <div className={styles.navigation}>
              {!answerSelected && <p>Please select an answer to proceed.</p>}

              {answerSelected &&
                (quizQuestions.indexOf(currentQuestion) ===
                quizQuestions.length - 1 ? (
                  <button
                    className={styles.quizButton}
                    onClick={handleOnSubmit}
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    onClick={moveToNextQuestion}
                    className={styles.quizButton}
                  >
                    Next Question
                  </button>
                ))}
            </div>
          </div>
        </div>

        {showResult && <Result wrongAns={wrongAns} rightAns={rightAns} />}
      </div>
    </>
  );
};

export default QuizApp;
