import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  const quoteId = params.quoteId;

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{quoteId}</p>
      {/* path='/quotes/:quoteId/comments' */}
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
