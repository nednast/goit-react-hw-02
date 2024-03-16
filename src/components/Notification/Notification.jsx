const Notification = ({ totalFeedback }) => {
  if (totalFeedback == 0) {
    return (
      <>
        <p>No feedbacks yet</p>
      </>
    );
  } else {
    return <></>;
  }
};

export default Notification;
