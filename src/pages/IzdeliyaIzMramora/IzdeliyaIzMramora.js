import './IzdeliyaIzMramora.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Guarantee from '../../components/Guarantee/Guarantee';
import Feedback, { FeedbackPhone } from '../../components/Feedback';
import stairs from '../../images/img-izdeliya/img-stairs-steps/stairs-4.jpg';
import fireplace from '../../images/img-izdeliya/img-fireplaces-portals/fireplaces-7.jpg';
import table from '../../images/img-izdeliya/img-tables-countertops/tables-3.jpg';
import sill from '../../images/img-izdeliya/img-sills/sills-1.jpg';
import tile from '../../images/img-izdeliya/img-tiles-stones/tiles-11.jpg';
import facade from '../../images/img-izdeliya/img-facades/facades-27.jpg';
import design from '../../images/img-izdeliya/img-design/design-12.jpg';

const data = [
	{
		url: '/lestnicy-stupeni',
		src: stairs,
		title: 'Лестницы, Ступени',
		subtitle: 'Приглашаем к сотрудничеству строительные организации по всей России:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	},
	{
		url: '/kaminy-portaly',
		src: fireplace,
		title: 'Камины, порталы',
		subtitle: 'Приглашаем к сотрудничеству дизайнеров, архитекторов, проектировщиков:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	},
	{
		url: '/stoly-stoleshnicy',
		src: table,
		title: 'Столы, столешницы',
		subtitle: 'Приглашаем к сотрудничеству объекты религии и культуры:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	},
	{
		url: '/podokonniki',
		src: sill,
		title: 'Подоконники',
		subtitle: 'Приглашаем к сотрудничеству обработчиков камня по всей России:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	},
	{
		url: '/plitka-bruschatka',
		src: tile,
		title: 'Плитка, брусчатка',
		subtitle: 'Приглашаем к сотрудничеству обработчиков камня по всей России:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	},
	{
		url: '/oblicovka-fasadov',
		src: facade,
		title: 'Облицовка фасадов',
		subtitle: 'Приглашаем к сотрудничеству обработчиков камня по всей России:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	},
	{
		url: '/design',
		src: design,
		title: 'Индивидуальные решения',
		subtitle: 'Приглашаем к сотрудничеству обработчиков камня по всей России:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	}
];

const IzdeliyaIzMramora = () => {
    return (
		<>
			<Header title={'Изделия из Мрамора'} />
			<main className="main-product">
				<Container>
					<Row>
						{data.map(item => (
							<Col key={item.title} md='6'>
								<div className="main-product__wrapper">
										<Link to={'/izdeliya-iz-mramora' + item.url}>
											<div className='main-product__align-block'>
												<h2 className='main-product__title'>{item.title}</h2>
											</div>
										</Link>
									<div className="main-product__img-block">
										<img className='main-product__img' src={item.src} alt={item.title} />
									</div>
								</div>
							</Col>
						))}
					</Row>
				</Container>
				<FeedbackPhone/>
				<Guarantee />
				<Feedback/>
			</main>
			<Footer/>
		</>
	);
}

export default IzdeliyaIzMramora;
