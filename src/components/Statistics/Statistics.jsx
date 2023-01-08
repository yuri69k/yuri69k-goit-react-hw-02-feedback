import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { ImNeutral, ImHappy, ImSad } from 'react-icons/im';
import {FcBullish} from 'react-icons/fc';
import { MdAddShoppingCart } from 'react-icons/md';
import { StatisticsList, StatisticsItem } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsList>
    <StatisticsItem>
      <IconContext.Provider value={{ color: 'green', size: 35 }}>
        <ImHappy />
      </IconContext.Provider>
      <span>good : {good}</span>
    </StatisticsItem>
    <StatisticsItem>
      <IconContext.Provider value={{ color: 'gray', size: 35 }}>
        <ImNeutral />
      </IconContext.Provider>
      <span>neutral : {neutral}</span>
    </StatisticsItem>
    <StatisticsItem>
      <IconContext.Provider value={{ color: 'red', size: 35 }}>
        <ImSad />
      </IconContext.Provider>
      <span>bad : {bad}</span>
    </StatisticsItem>
    <StatisticsItem>
      <MdAddShoppingCart size={35} />
      <span>total: {total}</span>
    </StatisticsItem>
    <StatisticsItem>
      <FcBullish size={35} />
      <span>Positive feedback : {positivePercentage}</span> %
    </StatisticsItem>
  </StatisticsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;