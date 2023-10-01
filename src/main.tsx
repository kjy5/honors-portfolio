import "./styles/index.sass";
import { ArtifactData } from "./scripts/interfaces";
import ArtifactPage from "./routes/ArtifactPage";
import ErrorPage from "./routes/ErrorPage";
import ParseData from "./scripts/parse-data";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
// eslint-disable-next-line sort-imports
import { createHashRouter, RouterProvider } from "react-router-dom";
import Graphics from "./scripts/graphics";

// Parse data and return as an array of ArtifactPage objects
const artifacts: ArtifactData[] = ParseData();

// Create router
const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage fromArtifact={false} />,
    loader: () => artifacts,
  },
  {
    path: ":id",
    element: <ArtifactPage />,
    errorElement: <ErrorPage fromArtifact />,
    loader: ({ params }) => {
      const artifact = artifacts.find(
        (artifact: ArtifactData) => artifact.id === params.id
      );
      if (artifact) {
        return artifact;
      } else {
        // skipcq: JS-0343
        throw new Response("Artifact not found", { status: 404 });
      }
    },
  },
]);

// Render 3D
const graphics = new Graphics(
  document.getElementById("canvas") as HTMLCanvasElement
);
graphics.render();

// Create page
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
