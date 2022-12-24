import { Fragment } from "react";
import { useRouteError } from "react-router-dom";

type RouteError = {
  statusText?: string;
  message?: string;
};
export default function ErrorPage(props: { fromArtifact: boolean }) {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      {props.fromArtifact ? (
        <p>It appears this artifact doesn't exist!</p>
      ) : (
        <Fragment>
          <p>Sorry, an unexpected error has occurred.</p>
          <code>{error.statusText || error.message}</code>
        </Fragment>
      )}
    </div>
  );
}
