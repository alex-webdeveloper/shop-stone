import { useState, useEffect, useRef } from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import './CardsGoods.scss';
let cartObj = {};

const CardsGoods = ({ goods }) => {
    const [count, setCount] = useState(Array(goods.length).fill(1));
    const [defaultPrice, setDefaultPrice] = useState(Array(goods.length).fill(0));
    const [newPrice, setNewPrice] = useState(Array(goods.length).fill(0));
    const [size, setSize] = useState(Array(goods.length).fill('кв.м'));
    const [imgTitle, setImgTitle] = useState(Array(goods.length).fill('изделие не выбранно'));
    const goodsSize = { 'Балясины, форма стандартная': 'шт', 'Крошка россыпью': 'тонна', 'Тумба в комплекте': 'шт', 'Поручни': 'п.м' };

    const handleChange = (e, i) => {
        let newCount = [...count];
        newCount[i] = 1;
        setCount(newCount);
        let index = e.target.selectedIndex;
        let selected = e.target.options[index];
        let cost = selected.dataset.price;
        let label = selected.parentElement.getAttribute('label');
        let size2 = [...size];
        if (label in goodsSize) size2[i] = goodsSize[label];
        else size2[i] = 'кв.м';
        setSize(size2);

        let newPrice2 = [...newPrice];
        newPrice2[i] = cost;
        setNewPrice(newPrice2);

        let defaultPrice2 = [...defaultPrice];
        defaultPrice2[i] = cost;
        setDefaultPrice(defaultPrice2);

        let imgTitle2 = [...imgTitle];
        imgTitle2[i] = label;
        setImgTitle(imgTitle2);
    }
    const handleClickIncrement = (i) => {
        if (!defaultPrice[i]) return;
        let newCount = [...count];
        newCount[i]++;
        setCount(newCount);

        calc(i, newCount[i]);
    }
    const handleClickDecrement = (i) => {
        let newCount = [...count];
        if (newCount[i] === 1) return;
        newCount[i]--;
        setCount(newCount);

        calc(i, newCount[i]);
    }
    const calc = (i, count) => {
        let newPrice2 = [...newPrice];
        newPrice2[i] = defaultPrice[i] * count;
        setNewPrice(newPrice2);
    }
    const handleClick = (e, i) => {
        let select = e.target.parentElement.children[1];
        let index = select.selectedIndex;
        let selected = select.options[index];
        let size = selected.value;
        let product = selected.parentElement.dataset.product;
        let label = goods[i].products[product].label;
        cartObj[label + ' ' + size] = {'цена': defaultPrice[i], 'количество': count[i], 'общая-стоимость': newPrice[i], 'цвет': goods[i].color};
        console.log(cartObj)
        // localStorage.setItem('cart', JSON.stringify(cartObj));
    }
    return (
        <section className="cards-goods">
            <Container>
                <Row>
                    {goods.map((card, i) => (
                        <Col key={card.title + i} sm="6" md="4">
                            <div className="cards-goods__wrapper">
                                <div className="cards-goods__img-block">
                                    <img className="cards-goods__img" src={card.src} alt={card.title} />
                                    <p className='cards-goods__img-title'>{imgTitle[i]}</p>
                                </div>
                                <div className="cards-goods__descr">
                                    <h2 className="cards-goods__title">{card.title}</h2>
                                    <select onChange={(e) => handleChange(e, i)} name={"select-goods-select-" + i} className='cards-goods__select'>
                                        <option value="Выберите изделие" hidden>Выберите изделие</option>
                                        {Object.keys(card.products).map(product => (
                                            <optgroup key={card.products[product].label} label={card.products[product].label} data-product={product}>
                                                {Object.entries(card.products[product].price).map(elem => (
                                                    <option key={elem[0]} data-price={elem[1]} value={elem[0]}>Размер: {elem[0]}</option>
                                                ))}
                                            </optgroup>
                                        ))}
                                    </select>
                                    <p id={"cards-goods__price-" + i} className="cards-goods__price">{newPrice[i]} руб.</p>
                                    <div className="cards-goods__count">
                                        <span onClick={() => handleClickDecrement(i)} className='cards-goods__decrement'>-</span>
                                        <span id={'cards-goods__number-1' + i} className='cards-goods__number'>{count[i]} {size[i]}</span>
                                        <span onClick={() => handleClickIncrement(i)} className='cards-goods__increment'>+</span>
                                    </div>
                                    <Button onClick={(e) => handleClick(e, i)} id='cards-goods_add-cart' className='cards-goods__btn'>Добавить в корзину</Button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
        </Container>
        </section>
    )
}

export default CardsGoods;