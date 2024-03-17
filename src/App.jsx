import { useState, useEffect } from "react";
import Descriprion from "./components/Description/Descriprion";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    let saveFeedback = window.localStorage.getItem("saved-feedbacks");
    if (saveFeedback !== null) {
      return JSON.parse(saveFeedback).feedback;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };
  let totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalPercent = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    window.localStorage.setItem(
      "saved-feedbacks",
      JSON.stringify({ feedback })
    );
  }, [feedback]);

  return (
    <>
      <Descriprion />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          totalPercent={totalPercent}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
