import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
// import CardsGoods from '../../components/CardsGoods/CardsGoods';
import GalleryImg from '../../components/GalleryImg';
import Guarantee from "../../components/Guarantee/Guarantee";
import Feedback, { FeedbackPhone } from "../../components/Feedback";
import { galleryImgFireplaces } from '../../data';

const KaminyPortaly = () => {
    return (
		<>
			<Header title={'Камины, порталы'} />
			<main className='main-goods'>
				<GalleryImg items={galleryImgFireplaces} />
				<FeedbackPhone/>
				<Guarantee />
				<Feedback/>
			</main>
			<Footer/>
		</>
	);
}

export default KaminyPortaly;