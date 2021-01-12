import React from 'react';
import styled from 'styled-components';
import ApplicantCard from './ApplicantCard';
import { DataType } from '../helpers/types';
import { FormattedMessage } from 'react-intl';

const SectionTitle = styled.h2`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 20px;
  color: #4a4a4a;    
`;

const SectionContainer = styled.div`
  margin-top: 24px;

  & .cards-container {
    margin: 0 -8px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: scroll;

    .card {
      width: calc(100% - 16px);
      margin: 24px 8px 0px;

      @media (min-width: 720px) {
        width: calc(25% - 16px);
      }
    }

    @media (min-width: 720px) {
      flex-wrap: wrap;
      overflow-x: unset;
    }
  }

  @media (min-width: 720px) {
    margin-top: 32px
  }
`;

interface Props {
  titleId: string,
  data: Array<DataType>
}

const ApplicantsSection = ({titleId, data}: Props) => {
  return (
    <SectionContainer>
      <SectionTitle><FormattedMessage id={titleId} values={{count: data.length}} /></SectionTitle>
      <div className="cards-container">
        {data.map((el: DataType) => (
          <div className="card" key={`${el.status}_${el.id}`}>
            <ApplicantCard {...el}/>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export default ApplicantsSection;