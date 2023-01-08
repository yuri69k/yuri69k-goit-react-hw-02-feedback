import PropTypes from 'prop-types';
import { FeedbackWrapper, FeedbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackWrapper>
    {options.map((option, index) => (
      <FeedbackButton
        key={index}
        name={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option}
      </FeedbackButton>
    ))}
  </FeedbackWrapper>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;