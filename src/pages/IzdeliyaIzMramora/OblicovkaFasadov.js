import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
// import CardsGoods from '../../components/CardsGoods/CardsGoods';
import GalleryImg from '../../components/GalleryImg';
import Guarantee from "../../components/Guarantee/Guarantee";
import Feedback, { FeedbackPhone } from "../../components/Feedback";
import { galleryImgFacades } from '../../data';

const OblicovkaFasadov = () => {
	
    return (
		<>
			<Header title={'Облицовка фасадов'} />
			<main className='main-goods'>
				<GalleryImg items={galleryImgFacades} />
				<FeedbackPhone/>
				<Guarantee />
				<Feedback/>
			</main>
			<Footer/>
		</>
	);
}

export default OblicovkaFasadov;