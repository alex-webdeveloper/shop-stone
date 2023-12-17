import './Contacts.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import { Container, NavLink } from 'reactstrap';

const Contacts = () => {
    return (
		<>
			<Header title={'Контакты'} />
			<main className='main-pages'>
				<Container>
					<h2 className="main-pages__title">Производство, карьер</h2>
					<div className='main-pages__descr'>
						<address>
						Россия, Республика Дагестан, г. Махачкала, Северная Промзона.<br/>
						тел.: <a className='main-pages__link' href="tel:+77778889900">+7 (8722) 60-39-17</a>
					</address>
						<h2 className="main-pages__title mt-5">Офис продаж и склад</h2>
						<p className="main-pages__text">
							<b>Время работы: Пн-Вс 9:00 - 20:00</b>
						</p>
					<address>
						г. Москва ул. Скотопрогонная д. 35 стр. 9<br/>
						e-mail: <a className='main-pages__link' href="mailto:article@auth.or">article@auth.or</a><br/>
						тел.: <a className='main-pages__link' href="tel:+77778889900">+7 (777) 888-99-00</a>
					</address>
					</div>
					<h2 className="main-pages__title">Схема проезда до офиса и склада</h2>
					<div className="main-pages__map">
						<div style={{ position: 'relative', overflow: 'hidden'}}><a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0'}}>Москва</a><a href="https://yandex.ru/maps/213/moscow/house/skotoprogonnaya_ulitsa_35s9/Z04YcQdlT0AFQFtvfXtzd3ljYw==/?ll=37.712229%2C55.725970&utm_medium=mapframe&utm_source=maps&z=15.49" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>Скотопрогонная улица, 35с9  — Яндекс Карты</a><iframe title='map' src="https://yandex.ru/map-widget/v1/?ll=37.712229%2C55.725970&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjY5MTkyMhJK0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCh0LrQvtGC0L7Qv9GA0L7Qs9C-0L3QvdCw0Y8g0YPQu9C40YbQsCwgMzXRgTkiCg2Y0hZCFfHnXkI%2C&z=15.49" height="400" frameborder="1" allowfullscreen="true" style={{position: 'relative'}}></iframe></div>
						<script src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac8221a44d5ca382cde6f522b4aa96156d41aed818eab3d1e8791ac32cd2926f6&amp;width=100U+0025&amp;height=400&amp;lang=ru_RU&amp;scroll=false"/>
					</div>
				</Container>
			</main>
			<Footer/>
		</>
	);
}

export default Contacts;