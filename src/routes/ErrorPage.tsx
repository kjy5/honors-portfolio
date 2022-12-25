import { Fragment } from "react";
import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

/**
 * Error / 404 page, displays error information
 * @param props {fromArtifact: boolean} Whether the error page is being displayed from an artifact page
 * @constructor
 * @returns {JSX.Element}
 */
export default function ErrorPage(props: {
  fromArtifact: boolean;
}): JSX.Element {
  const error = useRouteError() as RouteError;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      {props.fromArtifact ? (
        <p>It appears this artifact doesn&apos;t exist!</p>
      ) : (
        <Fragment>
          <p>Sorry, an unexpected error has occurred.</p>
          <code>{error.statusText || error.message}</code>
        </Fragment>
      )}
    </div>
  );
}
