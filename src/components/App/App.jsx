import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Option from "../Option/Option";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const localStorageFeedback = window.localStorage.getItem("feedback-key");
    if (localStorageFeedback !== null) {
      return JSON.parse(localStorageFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("feedback-key", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Option
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        totalValue={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          value={feedback}
          totalValue={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
