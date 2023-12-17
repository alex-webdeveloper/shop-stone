import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import CardsGoods from '../../components/CardsGoods/CardsGoods';
import { stupeni, galleryImgStairs } from '../../data';
import GalleryImg from '../../components/GalleryImg';
import Guarantee from "../../components/Guarantee/Guarantee";
import Feedback, { FeedbackPhone } from "../../components/Feedback";

const LestnicyStupeni = () => {
    return (
		<>
			<Header title={'Лестницы, ступени'} />
			<main className='main-goods'>
			{/* <CardsGoods goods={stupeni} /> */}
				<GalleryImg items={galleryImgStairs} />
				<FeedbackPhone/>
				<Guarantee />
				<Feedback/>
			</main>
			<Footer/>
		</>
	);
}

export default LestnicyStupeni;