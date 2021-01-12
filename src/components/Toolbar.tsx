import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import BackIcon from '../assets/back.svg';
import { DataType } from '../helpers/types';

const STATUS_TYPES = ["Appointment_Set", "Property_Viewed", "Interested", "Offer_Accepted"];

const RowSection = styled.div`
  display: flex;
  align-items: center;

  & .back-icon {
    margin-right: 16px;
  }

  & .desktop-only {
    display: none;
  }

  & .title-section {
    display: flex;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 720px) {
    font-size: 24px;

    & .desktop-only {
      display: unset;
    }

    & .info-section {
      display: flex;
      align-items: center;

      > :last-child {
        border-right: none;
      }
    }
  }
`;

const Title = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 20px;
  color: #4a4a4a;

  @media (min-width: 720px) {
    font-size: 24px;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 110px;
  border-right: 1px solid #E6E6E6;

  & .info-number {
    font-size: 20px;
    color: #4a4a4a;
    font-weight: bold;
  }

  & .info-subtitle {
    font-size: 14px;
    color: #4a4a4a;
    margin-top: 4px;
  }
`;

interface Props {
  data: Array<DataType>
}

const Toolbar = ({data}: Props) => {
  const newApplicants = data.filter(el => el.status === STATUS_TYPES[2]);
  const viewedApplicants = data.filter(el => el.status === STATUS_TYPES[1]);
  const appointmentsApplicants = data.filter(el => el.status === STATUS_TYPES[0]);
  const otherApplicants = data.filter(el => el.status === STATUS_TYPES[3]);

  return (
    <>
      <RowSection>
        <div className="title-section">
          <img src={BackIcon} className="back-icon" alt="back-icon"/>
          <Title><FormattedMessage id="title"/></Title>
        </div>
        <div className="desktop-only info-section">
          <InfoBlock>
            <span className="info-number">{data.length}</span>
            <span className="info-subtitle"><FormattedMessage id="total"/></span>
          </InfoBlock>
          <InfoBlock>
            <span className="info-number">{newApplicants.length}</span>
            <span className="info-subtitle"><FormattedMessage id="new"/></span>
          </InfoBlock>
          <InfoBlock>
            <span className="info-number">{viewedApplicants.length}</span>
            <span className="info-subtitle"><FormattedMessage id="appointments"/></span>
          </InfoBlock>
          <InfoBlock>
            <span className="info-number">{appointmentsApplicants.length}</span>
            <span className="info-subtitle"><FormattedMessage id="viewed"/></span>
          </InfoBlock>
          <InfoBlock>
            <span className="info-number">{otherApplicants.length}</span>
            <span className="info-subtitle"><FormattedMessage id="others"/></span>
          </InfoBlock>
        </div>
      </RowSection>
    </>
  );
}

export default Toolbar;
