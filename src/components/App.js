import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import Feedback from './Feedback';
import FeedbackForm from './Form';
import { ReactComponent as Logo } from '../img/svg/logo.svg';

class App extends Component {
  render() {
    return (
      <Layout>
        <Feedback
          title="Оцінка якості обслуговування у фірмових&nbsp;магазинах"
          image={Logo}
        >
          <p>
            Пивоварня «Уманьпиво» завжди ЗА покращення якості. Тому нам дуже
            важлива ВАША думка.
          </p>
          <p>
            Запрошуємо взяти участь в оцінюванні фірмових магазинів пивоварні,
            що допоможе покращити рівень сервісу та краще зрозуміти уподобання
            наших клієнтів.
          </p>
          <FeedbackForm />
        </Feedback>
        <GlobalStyle />
      </Layout>
    );
  }
}

export default App;
