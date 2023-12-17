import React, { useState, useRef , useEffect} from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, FormText } from "reactstrap";
import './FeedbackPhone.scss';

const FeedbackPhone = () => {

    return (
        <section className="feedbackPhone">
            <Container>
                <div className="feedbackPhone__wrapper">
                    <h3 className='feedbackPhone__title'>Остались вопросы?</h3>
                    <ModalBlock/>
                    <a href="tel:+74954647555" className="feedbackPhone__btn btn btn-secondary">Или наберите нам</a>
                </div>
            </Container>
        </section>
    ) 
}

export default FeedbackPhone;



function ModalBlock(props) {
    const [modal, setModal] = useState(false);
    const inputRef = useRef(null);
    const [unmountOnClose, setUnmountOnClose] = useState(true);

    const toggle = () => {
        setModal(!modal);
        setTimeout(() => inputRef.current.focus());
  };
//   const changeUnmountOnClose = (e) => {
//     let { value } = e.target;
//     setUnmountOnClose(JSON.parse(value));
//   };

  return (
      <div>
        <Button className="feedbackPhone__btn" onClick={toggle}>
          Спросите у нашего специалиста!
        </Button>
        <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
            <Form>
                <FormGroup>
                    <ModalHeader toggle={toggle}>Введите ваши данные и нажмите заказать звонок</ModalHeader>
                    <ModalBody>
                        <Input
                        type="text"
                        placeholder="Введите ваше имя"
                        required
                        innerRef={inputRef}
                        />
                        <Input        
                        type="tel"
                        placeholder="Введите телефон"
                        // required
                        />
                        <Input        
                        type="text"
                        defaultValue="Запрос на обратный звонок"
                        hidden
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button type='submit'>
                            Заказать звонок
                        </Button>
                        <Button onClick={toggle} type='button'>
                            Отмена
                        </Button>{''}
                        <FormText>
                            Перезвоним в течении 15 минут
                        </FormText>
                    </ModalFooter>
                </FormGroup>
            </Form>
      </Modal>
    </div>
  );
}