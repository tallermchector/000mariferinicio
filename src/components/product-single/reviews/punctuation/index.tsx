import Rater from "react-rater";

import type { PunctuationType } from "@/types";

const Punctuation = ({
  votes,
  punctuation,
  countOpinions,
}: PunctuationType) => {
  const percentageBar = (count: number) => {
    return (count * 100) / countOpinions;
  };

  return (
    <section className="product-punctuation" aria-label="Valoraciones">
      <div className="product-punctuation__values">
        <h3>{punctuation}</h3>
        <Rater total={5} interactive={false} rating={punctuation} />
        <p>
          <i className="icon-avatar" aria-hidden="true" />
          {countOpinions} opiniones
        </p>
      </div>

      <div className="product-punctuation__rates">
        <ul className="punctuations-lists">
          {votes.map((vote) => (
            <li key={vote.value} className="punctuation-item">
              <Rater total={1} interactive={false} rating={1} />
              <span>{vote.value}</span>
              <div
                className="punctuation-item__bar"
                role="progressbar"
                aria-label={`${vote.count} opiniones con ${vote.value} estrellas`}
                aria-valuenow={Math.round(percentageBar(vote.count))}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  style={{ width: `${percentageBar(vote.count)}%` }}
                  className="punctuation-item__bar__current"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="punctuation-btn-wrapper">
        <button type="button" className="btn btn--secondary btn--md">
          Escribir una opinión
        </button>
      </div>
    </section>
  );
};

export default Punctuation;
