import { Container, Row, Col } from 'reactstrap';
import quality from './img/quality.png';
import works from './img/works.png';
import temp from './img/temp.png';
import price from './img/price.png';
import consultation from './img/consultation.png';
import coffee from './img/coffee.png';
import './Guarantee.scss';

const data = [
    {
        text: 'Высокое качество',
        src: quality,
    }, 
    {
        text: 'Выполнение работ под ключ',
        src: works,
    },
    {
        text: 'Монтаж в короткие сроки',
        src: temp,
    },
    {
        text: 'Цены от производителя',
        src: price,
    },
    {
        text: 'Бесплатный замер и консультацию',
        src: consultation,
    },
    {
        text: 'Горячее кофе в офисе',
        src: coffee
    }
]
const Guarantee = () => {

    return (
        <section className="guarantee">
            <Container>
                <h2 className='guarantee__title'>Мы гарантируем вам</h2>
                <Row className='align-items-end'>
                    {data.map(item => (
                        <Col key={item.text} sm='6' lg='4'>
                            <div className="guarantee__img-block">
                                <img className='guarantee__img' src={item.src} alt={item.text} />
                            </div>
                            <p className='guarantee__text'><strong>{item.text}</strong></p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Guarantee;