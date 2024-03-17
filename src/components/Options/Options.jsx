import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <>
      <ul className={css.bntWrapper}>
        <li>
          <button onClick={() => updateFeedback("good")}>Good</button>
        </li>
        <li>
          <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        </li>
        <li>
          <button onClick={() => updateFeedback("bad")}>Bad</button>
        </li>
        <li>
          {totalFeedback > 0 ? (
            <button onClick={() => resetFeedback()}>Reset</button>
          ) : (
            ""
          )}
        </li>
      </ul>
    </>
  );
};

export default Options;
