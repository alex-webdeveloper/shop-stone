import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Container } from "reactstrap";
import './GalleryImg.scss'


const GalleryImg = (props) => {

	return (
		<section className="gallery-section">
			<Container>
			<ImageGallery {...props} showIndex autoPlay />
			</Container>
		</section>
	)
}

export default GalleryImg;
  
