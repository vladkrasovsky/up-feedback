import { Component } from 'react';
import Button from 'components/Button';
import { Label } from './Form.styled';
import shops from 'data/shops.json';

class FeedbackForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {};

    new FormData(form).forEach((value, name) => {
      data[name] = value;
    });

    console.log(data);
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Label>
          <span>Оберіть фірмовий магазин, який бажаєте оцінити</span>
          <select name="shop" required>
            <option value="">Оберіть магазин</option>
            {shops.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
        </Label>

        <Label>
          <span>Оцініть якість сервісу магазину за 5-ти бальною шкалою</span>
          <input required type="radio" name="score" value={1} /> 1
          <input required type="radio" name="score" value={2} /> 2
          <input required type="radio" name="score" value={3} /> 3
          <input required type="radio" name="score" value={4} /> 4
          <input required type="radio" name="score" value={5} /> 5
        </Label>

        <Label>
          <span>Додайте коментар, якщо бажаєте</span>
          <textarea name="comment" placeholder="Введіть текст"></textarea>
        </Label>

        <Button type="submit">Відправити</Button>
      </form>
    );
  }
}

export default FeedbackForm;
