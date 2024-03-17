import React from "react";

const Feedback = ({ feedback, totalFeedback, totalPercent }) => {
  return (
    <>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positif: {totalPercent}</p>
    </>
  );
};

export default Feedback;
