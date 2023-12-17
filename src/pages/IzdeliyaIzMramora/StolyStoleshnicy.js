import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
// import CardsGoods from '../../components/CardsGoods/CardsGoods';
import GalleryImg from '../../components/GalleryImg';
import Guarantee from "../../components/Guarantee/Guarantee";
import Feedback, { FeedbackPhone } from "../../components/Feedback";
import { galleryImgTablesCountertops } from '../../data';

const StolyStoleshnicy = () => {
    return (
		<>
		<Header title={'Столы, столешницы'} />
		<main className='main-goods'>
			<GalleryImg items={galleryImgTablesCountertops} />
			<FeedbackPhone/>
			<Guarantee />
			<Feedback/>
		</main>
		<Footer/>
		</>
	);
}

export default StolyStoleshnicy;