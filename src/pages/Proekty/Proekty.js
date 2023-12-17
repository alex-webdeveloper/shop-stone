import './Proekty.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col } from 'reactstrap';
import GalleryImg from '../../components/GalleryImg';
import Guarantee from '../../components/Guarantee/Guarantee';
import Feedback from '../../components/Feedback';
import {
  galleryImgApartMosCity, galleryImgHouseGorki, galleryImgBalticRiviera, galleryImgLibraryRan, galleryImgVersaillesHouse, galleryImgResidencesZamoskvorechye, galleryImgNobelius,
  galleryImgRenovationRostokino, galleryImgChurchFilevskayaFloodplain, galleryImgChurchAscensionGod, galleryImgMonumentPrimakov,
  galleryImgChurchNewmartyrsConfessors, galleryImgChurchSeraphimSarov, galleryImgResidence, galleryImgApartmentKrasnayaStrela
 } from '../../data';

const arrGallery = [
	{
		id: 'apartments-moscow-city',
		gallery: galleryImgApartMosCity,
		title: 'IQ-APARTMENTS Москва-Сити'
	},
	{
		id: 'house-gorki',
		gallery: galleryImgHouseGorki,
		title: 'Частный дом КП Горки'
	},
	{
		id: 'baltic-riviera',
		gallery: galleryImgBalticRiviera,
		title: 'Балтийская ривьера'
	},
	{
		id: 'library-ran',
		gallery: galleryImgLibraryRan,
		title: 'Библиотека РАН'
	},
	{
		id: 'versailles-house',
		gallery: galleryImgVersaillesHouse,
		title: 'Версаль частный дом СПБ'
	},
	{
		id: 'residences-zamoskvorechye',
		gallery: galleryImgResidencesZamoskvorechye,
		title: 'ЖК "Резиденция Замоскворечье" м.Павелецкая'
	},
	{
		id: 'nobelius',
		gallery: galleryImgNobelius,
		title: 'ЖК <<Нобелиус>>'
	},
	{
		id: 'renovation-rostokino',
		gallery: galleryImgRenovationRostokino,
		title: 'Объект Реновации. Москва, Ростокино, Сельскохозяйственная, 14'
	},
	{
		id: 'church-filevskaya-floodplain',
		gallery: galleryImgChurchFilevskayaFloodplain,
		title: 'Храм на филевской пойме'
	},
	{
		id: 'church-ascension-god',
		gallery: galleryImgChurchAscensionGod,
		title: 'храм Вознесения Господня село Дудино'
	},
	{
		id: 'monument-primakov',
		gallery: galleryImgMonumentPrimakov,
		title: 'Памятник Евгению Примакову'
	},
	{
		id: 'church-newmartyrs-confessors',
		gallery: galleryImgChurchNewmartyrsConfessors,
		title: 'Храм Новомучеников и исповедников Российских в Строгино'
	},
	{
		id: 'church-seraphim-sarov',
		gallery: galleryImgChurchSeraphimSarov,
		title: 'Храм Преподобного Серафима Саровского в Раево'
	},
	{
		id: 'residence',
		gallery: galleryImgResidence,
		title: 'Частная резиденция'
	},
	{
		id: 'apartment-krasnaya-strela',
		gallery: galleryImgApartmentKrasnayaStrela,
		title: 'Апарт-комплекс "Красная стрела"'
	}

]

const Proekty = () => {

const handleClick = (e) => {
	const target = e.target.closest('.main-pages__tab');
	if (!target || target.classList.contains('main-pages__tab_active')) return;
	const id = target.dataset.target?.slice(1);
    const parent = e.currentTarget;
    const arrTabs = [...parent.firstElementChild.firstElementChild.firstElementChild.children, ...parent.firstElementChild.lastElementChild.firstElementChild.children];

	const [...arrGal] = parent.nextElementSibling.children;
	arrGal.forEach((block, i) => {
		arrTabs[i].classList.remove('main-pages__tab_active');
		block.classList.remove('main-pages__gallery_active');
		if (block.id === id) block.classList.add('main-pages__gallery_active');
		});
	target.classList.add('main-pages__tab_active');
	}

    return (
		<>
			<Header title={'Наши проекты'} />
			<main className="main-pages">
				<Container>
					<div className="main-pages__block-tabs-images">
					<div className="main-pages__collapse-block" onClick={handleClick}>
						<Row>
						<Col sm='6'>
							<ul className="main-pages__tabs">
							{arrGallery.slice(0, 8).map((elem, i) => (
								<li  key={elem.id} className={"main-pages__tab" + (i === 0 ? ' main-pages__tab_active' : "")} data-target={"#" + elem.id}>{elem.title}</li>
							))}
							</ul>
						</Col>
						<Col sm='6'>
							<ul className="main-pages__tabs">
							{arrGallery.slice(8).map(elem => (
								<li key={elem.id} className="main-pages__tab" data-target={"#" + elem.id}>{elem.title}</li>
							))}
							</ul>
						</Col>
						</Row>
					</div>
					<div className="main-pages__galleries">
						{arrGallery.map((elem, i) => (
						<div id={elem.id} className={'main-pages__gallery' + (i === 0 ? ' main-pages__gallery_active' : '')}><GalleryImg items={elem.gallery} /></div>
						))}
					</div>
					</div>
				</Container>
				<Guarantee />
				<Feedback/>
			</main>
			<Footer/>
		</>
	);
}

export default Proekty;