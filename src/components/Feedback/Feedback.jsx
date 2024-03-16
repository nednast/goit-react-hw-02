import React from "react";

const Feedback = ({ feedback, totalFeedback }) => {
  if (totalFeedback !== 0) {
    return (
      <>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>
          Positif:
          {Math.round(
            ((feedback.good + feedback.neutral) / totalFeedback) * 100
          )}
        </p>
      </>
    );
  }
};

export default Feedback;
