import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './GlobalStyle';
import { Layout, Container } from './Layout';
import Feedback from './Feedback';
import FeedbackForm from './Form';
import { ReactComponent as Logo } from '../img/svg/logo.svg';
import Button from './Button';

class App extends Component {
  state = {
    status: 'idle',
  };

  handleClose = () => {
    this.setState({ status: 'idle' });
  };

  addFeedback = feedback => {
    this.setState({ status: 'pending' });

    const options = {
      method: 'POST',
      body: JSON.stringify(feedback),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    setTimeout(() => {
      fetch('https://fb.umanpivo.ua/api/feedback/', options)
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          return res.json;
        })
        .then(data => {
          this.setState({ status: 'resolved' });
        })
        .catch(error => {
          console.error(error.message);
          this.setState({ status: 'rejected' });
        });
    }, 1000);
  };

  showFeedback() {
    return (
      <Feedback
        title="Оцінка якості обслуговування у фірмових&nbsp;магазинах"
        image={Logo}
      >
        <p>
          Пивоварня «Уманьпиво» завжди ЗА покращення якості. Тому нам дуже
          важлива ВАША думка.
        </p>
        <p>
          Запрошуємо взяти участь в анонімному оцінюванні фірмових магазинів
          пивоварні, що допоможе покращити рівень сервісу та краще зрозуміти
          уподобання наших клієнтів.
        </p>
        <FeedbackForm onSubmit={this.addFeedback} />
      </Feedback>
    );
  }

  showThanks() {
    return (
      <>
        <h2>Дякуємо за Ваш відгук!</h2>
        <p>
          Це допоможе покращити рівень сервісу та краще зрозуміти Ваші
          уподобання.
        </p>
        <Button onClick={this.handleClose}>Закрити</Button>
      </>
    );
  }

  showPending() {
    return <h2>Надсилаємо Ваш відгук...</h2>;
  }

  showRejected() {
    return (
      <>
        <h2>Сталась помилка!</h2>
        <p>Перепрошуємо за незручності, спробуйте, будь ласка ще раз.</p>
        <Button onClick={this.handleClose}>Спробувати ще</Button>
      </>
    );
  }

  render() {
    const { status } = this.state;

    return (
      <Layout>
        <Container>
          {status === 'idle' && this.showFeedback()}
          {status === 'pending' && this.showPending()}
          {status === 'rejected' && this.showRejected()}
          {status === 'resolved' && this.showThanks()}
        </Container>
        <GlobalStyle />
        <ToastContainer theme="colored" position="top-center" />
      </Layout>
    );
  }
}

export default App;
