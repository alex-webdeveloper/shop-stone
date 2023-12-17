import './Footer.scss';
import { Link } from "react-router-dom";
import {
  Container, Row, Col, Nav, NavItem, NavLink, NavbarText
} from 'reactstrap';
const BlockFooter = ({size, title, list}) => {

	return (
		<Col md={size}>
			<h2>{title}</h2>
			<Nav vertical>
				{list.map(it => (
					<NavItem key={it.text}>
						<NavLink to={it.link} tag={Link}>
							{it.text}
						</NavLink>
					</NavItem>
				))}
				</Nav>
		</Col>
	)
}

const Footer = () => {
    return (
		<footer className='footer'>
			<Container>
				<nav className='footer__nav'>
					<Row>
						<BlockFooter size={'3'} title={'Продукция'} list={ [ {text: 'Плитка, Брусчатка', link: '#'},  {text: 'Лестницы, Ступени', link: '#'}, {text: 'Камины, Порталы', link: '#'}, {text: 'Столы, Столешницы', link: '#'}, {text: 'Подоконники', link: ''}, {text: 'Облицовка фасадов', link: '#'}, {text: 'Индивидуальные решения', link: '#'} ] }/>
						<BlockFooter size={'2'} title={'Камень'} list={ [ {text: 'Мрамор', link: "/mramor"}, {text: 'Мраморный известняк', link: '/mramor'} ] } /> 
						<BlockFooter size={'3'} title={'Информация'} list={[{ text: 'О нас', link: '/about' }, { text: 'Партнерам', link: '/partneram' }, { text: 'Наши проекты', link: '/proekty'}, { text: 'Все изделия', link: '/#'} ] } />
						{/* <BlockFooter title={'Контакты'} list={ ['arkaskamen@form.com', '882-587-3025', 'Москва ул. Каменная дом 2 стр.1'] } /> */}
						<Col md='4'>
							<h2>Контакты</h2>
							<Nav vertical>
								<NavItem>
									<NavLink href='mailto:info@eco-fer.pro'>
										arkaskameninfo@form.com
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href='tel:+74954647555'>
										495-444-44-44
									</NavLink>
								</NavItem>
								<NavItem>
									<NavbarText className='nav-link'>Москва ул. Скотопрогонная д. 35 стр. 9</NavbarText>
								</NavItem>
							</Nav>
						</Col>
					</Row>
				</nav>
			</Container>
		</footer>
	);
}

export default Footer;