import Header from "../../components/Header";
import CardsGoods from "../../components/CardsGoods/CardsGoods";
import Footer from "../../components/Footer/Footer";
import "./Mramor.scss";
import GalleryImg from "../../components/GalleryImg";
import Guarantee from "../../components/Guarantee/Guarantee";
import Feedback, { FeedbackPhone } from "../../components/Feedback";
import {
	mramor,
	galleryImgStairs,
	galleryImgFireplaces,
	galleryImgDesign,
	galleryImgFacades,
	galleryImgTilesStones,
	galleryImgSills,
	galleryImgTablesCountertops,
} from "../../data";

const images = [
	...galleryImgFireplaces,
	...galleryImgDesign,
	...galleryImgStairs,
	...galleryImgFacades,
	...galleryImgTilesStones,
	...galleryImgSills,
	...galleryImgTablesCountertops,
];

const Mramor = () => {
	return (
		<>
			<Header title={"Мрамор"} />
			<main className="main-goods main-goods_mramor">
				<CardsGoods goods={mramor} modifier={"mramor"} />
				<FeedbackPhone />
				<h2 className="main-goods__title mb-5">Галерея изделий из мрамора</h2>
				<GalleryImg items={images} />
				<Guarantee />
				<Feedback />
			</main>
			<Footer />
		</>
  );
};

export default Mramor;
