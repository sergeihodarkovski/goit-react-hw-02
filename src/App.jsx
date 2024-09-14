import { useState, useEffect } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [votingData, setVotingData] = useState(() => {
    const savedVotingData = window.localStorage.getItem("votingData");
    return savedVotingData
      ? JSON.parse(savedVotingData)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("votingData", JSON.stringify(votingData));
  }, [votingData]);

  const updateFeedback = (feedbackType) => {
    setVotingData((prevData) => ({
      ...prevData,
      [feedbackType]: prevData[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    const resetData = { good: 0, neutral: 0, bad: 0 };
    setVotingData(resetData);
    window.localStorage.setItem("votingData", JSON.stringify(resetData));
  };

  const totalFeedback = votingData.good + votingData.neutral + votingData.bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((votingData.good / totalFeedback) * 100)
    : 0;

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          votingData={votingData}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback given yet." />
      )}
    </>
  );
};

export default App;
