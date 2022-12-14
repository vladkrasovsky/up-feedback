import { Component } from 'react';
import { toast } from 'react-toastify';
import Button from 'components/Button';
import { Control } from './Form.styled';
import shops from 'data/shops.json';
import Rating from 'components/Rating';

class FeedbackForm extends Component {
  state = {
    score: 0,
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { score } = this.state;
    const data = {};

    if (score === 0) {
      toast.error('Оцініть якість сервісу магазину!');
      return;
    }

    new FormData(form).forEach((value, name) => {
      data[name] = value;
    });

    data.score = score;

    this.props.onSubmit(data);
  };

  handleRatingChange = score => {
    this.setState({ score });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Control>
          <span>Оберіть фірмовий магазин, який бажаєте оцінити</span>
          <select name="shop" required>
            {/* <option value="">Оберіть магазин</option> */}
            {shops.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
        </Control>

        <Control>
          <span>Оцініть якість сервісу магазину за 5-ти бальною шкалою</span>
          <Rating onChange={this.handleRatingChange} />
          {/* <label>
            <input required type="radio" name="score" value={1} />
          </label>
          <label>
            <input required type="radio" name="score" value={2} />
          </label>
          <label>
            <input required type="radio" name="score" value={3} />
          </label>
          <label>
            <input required type="radio" name="score" value={4} />
          </label>
          <label>
            <input required type="radio" name="score" value={5} />
          </label> */}
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
