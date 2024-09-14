const Feedback = ({
  votingData,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <div>
      <ul>
        <li>Good: {votingData.good}</li>
        <li>Neutral: {votingData.neutral}</li>
        <li>Bad: {votingData.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedbackPercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
