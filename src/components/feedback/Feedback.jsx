const Feedback = ({ feedbackTypes, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul>
        <li>Good:{feedbackTypes.good}</li>
        <li>Neutral:{feedbackTypes.neutral}</li>
        <li>Bad:{feedbackTypes.bad}</li>
        <li>Total:{totalFeedback}</li>
        <li>Positive:{positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
