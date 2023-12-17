import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
// import CardsGoods from '../../components/CardsGoods/CardsGoods';
import GalleryImg from '../../components/GalleryImg';
import Guarantee from "../../components/Guarantee/Guarantee";
import Feedback, { FeedbackPhone } from "../../components/Feedback";
import { galleryImgSills } from '../../data';

const Podokonniki = () => {

    return (
          <>
            <Header title={'Подоконники'} />
            <main className='main-goods'>
				<GalleryImg items={galleryImgSills} />
				<FeedbackPhone/>
				<Guarantee />
				<Feedback/>
            </main>
            <Footer/>
          </>
	);
}

export default Podokonniki;