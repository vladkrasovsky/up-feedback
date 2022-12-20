import { Component } from 'react';
import { toast } from 'react-toastify';
import Button from 'components/Button';
import { Control } from './Form.styled';
import shops from 'data/shops.json';
import Rating from 'components/Rating';
import CustomSelect from 'components/CustomSelect';
import storageAPI from 'helpers/storage';

const SAVED_FEEDBACK_KEY = 'saved-feedback';
const DEFAULT_STATE = {
  shop: 'Оберіть магазин',
  score: 0,
  comment: '',
};

class FeedbackForm extends Component {
  state = { ...DEFAULT_STATE };

  componentDidMount() {
    const savedFeedback = storageAPI.load(SAVED_FEEDBACK_KEY);
    if (savedFeedback) {
      const { shop, score, comment } = savedFeedback;
      this.setState({ shop, score, comment });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      storageAPI.save(SAVED_FEEDBACK_KEY, this.state);
    }
  }

  handleSubmit = async e => {
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

    const isSuccess = await this.props.onSubmit(data);

    if (isSuccess) {
      storageAPI.remove(SAVED_FEEDBACK_KEY);
      this.setState({ ...DEFAULT_STATE });
    }
  };

  handleRatingChange = score => {
    this.setState({ score });
  };

  handleShopChange = shop => {
    this.setState({ shop });
  };

  handleCommentChange = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Control>
          <span>Оберіть фірмовий магазин, який бажаєте оцінити</span>
          <CustomSelect
            onChange={this.handleShopChange}
            defaultText={this.state.shop}
            optionsList={shops}
          />
        </Control>

        <Control>
          <span>Оцініть якість сервісу магазину за 5-ти бальною шкалою</span>
          <Rating
            onChange={this.handleRatingChange}
            defaultRating={this.state.score}
          />
        </Control>

        <Control>
          <span>Додайте коментар, якщо бажаєте</span>
          <textarea
            name="comment"
            placeholder="Введіть текст"
            value={this.state.comment}
            onChange={this.handleCommentChange}
          ></textarea>
        </Control>

        <Button type="submit">Відправити</Button>
      </form>
    );
  }
}

export default FeedbackForm;
