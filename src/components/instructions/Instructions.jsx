import React from "react";
import styles from "./instruction.module.css";
const Instructions = () => {
  return (
    <div className={styles.mainIns}>
      <div className={styles.insContainer}>
        <h1>Quiz App Instructions</h1>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            This Quiz app ask total 5 questions
          </li>
          <li className={styles.listItem}>
            If user did not answer the question visible in ui in 10secs then
            next question will be shown
          </li>
          <li className={styles.listItem}>
            If user answered the question within timelimit(10secs) then on click
            of next, user should be able to see next question then again timer
            will reset.
          </li>
          <li className={styles.listItem}>
            If user submits all 5 questions then a submit button will come and
            on click of that button result should be shown that how many are
            correct and incorrect.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Instructions;
