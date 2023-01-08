import styled from 'styled-components';

export const StatisticsList = styled.ul`
  background-color: #fff;
  border: 1px dashed #557b83;
  padding: 20px;
  border-radius: 10px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & span {
    margin-left: 20px;
  }
  margin-right: 150px;
`;