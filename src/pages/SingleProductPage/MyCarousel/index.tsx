import "react-image-gallery/styles/css/image-gallery.css";
import singleProductImage from "../../../assets/imgs/single-product.png";
import thumbnailImage from "../../../assets/imgs/thumbnail.png";
import VerticalStack from "../../../components/VerticalStack";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: singleProductImage,
    thumbnail: thumbnailImage,
  },
  {
    original: singleProductImage,
    thumbnail: thumbnailImage,
  },
  {
    original: singleProductImage,
    thumbnail: thumbnailImage,
  },
  {
    original: singleProductImage,
    thumbnail: thumbnailImage,
  },
  {
    original: singleProductImage,
    thumbnail: thumbnailImage,
  },
  {
    original: singleProductImage,
    thumbnail: thumbnailImage,
  },
];

const MyCarousel = () => {
  return (
    <VerticalStack
      height={"100%"}
      sx={{
        "& .image-gallery-image": {
          objectFit: "fill",
        },

        "& button.image-gallery-icon": {
          // top: '50%',
          padding: 0,
          px: 0,
          "& svg.image-gallery-svg": {
            width: "fit-content",
            height: 60,
          },
        },
        "& .image-gallery-thumbnails": {
          "& button.image-gallery-thumbnail": {
            "&.active, &:focus, &:hover": {
              borderColor: "primary.main",
            },
          },
        },
      }}
    >
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </VerticalStack>
  );
};

export default MyCarousel;
