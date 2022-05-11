import { Fragment } from "react";
import { Link, Route, useParams } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "User1", text: "Learning react is Fun" },
  { id: "q2", author: "User2", text: "Learning react is Great" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quoteId = params.quoteId;

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  if (!quote) {
    return <p>No quote found!!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <div className='centered'>
        <Link className='btn--flat' to={`/quotes/${quoteId}/comments`}>
          Load Comments!!
        </Link>
      </div>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
