import React from "react";
import styles from "./result.module.css";

const Result = ({ wrongAns, rightAns }) => {
  return (
    <div className={styles.main}>
      <div className={styles.resultContainer}>
        <h1>Quiz App</h1>
        <h2>Result</h2>
        <h3>
          {rightAns} answers is correct and {wrongAns} answers is wrong
        </h3>
      </div>
    </div>
  );
};

export default Result;
