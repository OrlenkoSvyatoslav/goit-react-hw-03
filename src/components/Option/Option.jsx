const Option = ({ onUpdate, onReset, totalValue }) => {
  return (
    <div>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button onClick={() => onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
      {totalValue > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};
export default Option;
