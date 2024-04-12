const Feedback = ({ value, totalValue, positiveFeedback }) => {
  return (
    <div>
      <p>Good:{value.good}</p>
      <p>Neutral:{value.neutral}</p>
      <p>Bad:{value.bad}</p>
      <p>Total:{totalValue}</p>
      <p>Positive:{positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
