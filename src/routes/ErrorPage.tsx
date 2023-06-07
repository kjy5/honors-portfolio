import { ReactElement } from "react";
import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

/**
 * Error / 404 page, displays error information
 * @param props {fromArtifact: boolean} Whether the error page is being displayed from an artifact page
 * @constructor
 * @returns {ReactElement}
 */
export default function ErrorPage(props: {
  fromArtifact: boolean;
}): ReactElement {
  const error = useRouteError() as RouteError;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      {props.fromArtifact ? (
        <p>It appears this artifact doesn&apos;t exist!</p>
      ) : (
        <p>Sorry, an unexpected error has occurred.</p>
      )}
      <br />
      <p>Error message for Kenneth to go figure out:</p>
      <code>{error.statusText || error.message}</code>
    </div>
  );
}
