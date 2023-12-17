import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
// import CardsGoods from '../../components/CardsGoods/CardsGoods';
import GalleryImg from '../../components/GalleryImg';
import Guarantee from "../../components/Guarantee/Guarantee";
import Feedback, { FeedbackPhone } from '../../components/Feedback';
import { galleryImgDesign } from '../../data';

const Design = () => {
    return (
		<>
		<Header title={'Индивидуальные решения'} />
		<main className='main-goods'>
			<GalleryImg items={galleryImgDesign} />
			<FeedbackPhone/>
			<Guarantee />
			<Feedback/>
		</main>
		<Footer/>
		</>
	);
}

export default Design;