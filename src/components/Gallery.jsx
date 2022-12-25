/**
 * Gallery component, displays a gallery of images
 * @param {object} props - Images to display
 * @constructor
 * @returns {JSX.Element}
 */
export default function Gallery(props) {
  const { images } = props;
  // Initialize the gallery
  // useEffect(() => {
  //   let lightbox = new PhotoSwipeLightbox
  // }, []);

  // Render
  return (
    <div className={"Gallery"}>
      {images.map((image) => (
        <p key={image.name}>{image.name}</p>
      ))}
    </div>
  );
}
