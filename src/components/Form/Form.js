import { Component } from 'react';
import { toast } from 'react-toastify';
import Button from 'components/Button';
import { Control } from './Form.styled';
import shops from 'data/shops.json';
import Rating from 'components/Rating';
import CustomSelect from 'components/CustomSelect';

class FeedbackForm extends Component {
  state = {
    shop: '',
    score: 0,
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { shop, score } = this.state;

    if (shop === '' || shop === 'Оберіть магазин') {
      toast.error('Оберіть фірмовий магазин!');
      return;
    }

    if (score === 0) {
      toast.error('Оцініть якість сервісу магазину!');
      return;
    }

    const data = {};
    new FormData(form).forEach((value, name) => {
      data[name] = value;
    });

    data.shop = shop;
    data.score = score;

    this.props.onSubmit(data);
  };

  handleRatingChange = score => {
    this.setState({ score });
  };

  handleShopChange = shop => {
    this.setState({ shop });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Control>
          <span>Оберіть фірмовий магазин, який бажаєте оцінити</span>
          <CustomSelect
            onChange={this.handleShopChange}
            defaultText="Оберіть магазин"
            optionsList={shops}
          />
        </Control>

        <Control>
          <span>Оцініть якість сервісу магазину за 5-ти бальною шкалою</span>
          <Rating onChange={this.handleRatingChange} />
        </Control>

        <Control>
          <span>Додайте коментар, якщо бажаєте</span>
          <textarea name="comment" placeholder="Введіть текст"></textarea>
        </Control>

        <Button type="submit">Відправити</Button>
      </form>
    );
  }
}

export default FeedbackForm;
