import styles from "./frontPage.module.css";
import { useNavigate } from "react-router-dom";

const FrontPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.mainClass}>
      <div className={styles.mainContainer}>
        <p className={styles.mainHeading}>Enter the Quiz App</p>
        <p className={styles.mainPara}>
          We created a intersting quiz app to make your mind fresh !
        </p>
        <button className={styles.mainBtn} onClick={() => navigate("/quiz")}>
          Start the game
        </button>
        <p className={styles.howPlay} onClick={() => navigate("/instructions")}>
          How to play ?
        </p>
      </div>
    </div>
  );
};

export default FrontPage;
