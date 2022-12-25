import "../styles/RichLink.sass";
import { LinkData } from "../scripts/interfaces";

export default function RichLink(props: { linkData: LinkData }): JSX.Element {
  // Extract props
  const { url, image, title, description } = props.linkData;

  // Render
  return (
    <a
      className="RichLink"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="RichLink__image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="RichLink__text">
        <p className="RichLink__text--title">{title}</p>
        <p className="RichLink__text--description">{description}</p>
        <p className="RichLink__text--href">{url}</p>
      </div>
    </a>
  );
}