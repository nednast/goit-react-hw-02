import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback }) => {
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
          <button onClick={() => resetFeedback()}>Reset</button>
        </li>
      </ul>
    </>
  );
};

export default Options;
