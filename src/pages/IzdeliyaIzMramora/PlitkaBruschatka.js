import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import CardsGoods from '../../components/CardsGoods/CardsGoods';
import { plitka, bruschatka, galleryImgTilesStones } from '../../data';
import GalleryImg from '../../components/GalleryImg';
import Guarantee from "../../components/Guarantee/Guarantee";
import Feedback, {FeedbackPhone} from "../../components/Feedback";

const PlitkaBruschatka = () => {
    return (
		<>
			<Header title={'Плитка, брусчатка'} />
			<main className='main-goods'>
				{/* <h2 className="main-goods__title">Плитка</h2>
				<CardsGoods goods={plitka} />
				<h2 className="main-goods__title">Брусчатка</h2>
				<CardsGoods goods={bruschatka} /> */}
				<GalleryImg items={galleryImgTilesStones} />
				<FeedbackPhone/>
				<Guarantee />
				<Feedback/>
			</main>
			<Footer/>
		</>
	);
}

export default PlitkaBruschatka;