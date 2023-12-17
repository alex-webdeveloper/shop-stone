import { Container, Row, Col, Button } from "reactstrap";
import './Feedback.scss';

const Feedback = () => {

    return (
        <section className="feedback">
            <Container>
                <div className="feedback__wrapper">
                    <h2 className='feedback__title'>Оставить заявку</h2>
                    <form /*method="post" onSubmit={'handleSubmit'}*/>
                        <div className="feedback__block-contakts">
                            <Row>
                                <Col sm='6'>
                                    <input className='feedback__name' type="text" id="name" name="name" placeholder="Ваше имя" required/>
                                </Col>
                                <Col sm='6'>
                                    <input className='feedback__contact' type="text" id="contact" name="contact" placeholder="Ваш e-mail или телефон" required/>
                                </Col>
                            </Row>
                        </div>
                        <div className="feedback__block-subject">
                            <textarea className='feedback__subject' id="subject" name="subject" placeholder="Ваше сообщение" required></textarea>
                        </div>
                        <div className="feedback__block-btn">
                            <Button type="submit">Отправить</Button>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    ) 
}

export default Feedback;