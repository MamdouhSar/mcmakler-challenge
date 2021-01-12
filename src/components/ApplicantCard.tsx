import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { getBackgroundColor } from '../helpers/colors';
import { formatDate } from '../helpers/date';
import { DataType } from '../helpers/types';

const CardContainer = styled.div`
  width: 305px;
  height: 241px;
  border-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .applicant-title {
    font-size: 16;
    font-weight: bold;
    text-align: center;
    margin-top: 8px;
  }

  & .applicant-subtitle {
    font-size: 16;
    text-align: center;
    margin-top: 8px;
  }

  & .status-box {
    background-color: #9d9d9d;
    border-radius: 3px;
    padding: 4px 8px;
    font-weight: bold;
    color: white;
    margin-top: 12px;
    font-size: 12px;
  }

  & .bid-box {
    background-color: #FEB902;
  }

  @media (min-width: 720px) {
    width: 100%;
  }
`;

interface AvatarProps {
  textColor?: string;
}

const Avatar = styled.div<AvatarProps>`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${p => getBackgroundColor(p.textColor)};
  color: ${p => p.textColor};

  > span {
    font-size: 16;
    font-weight: bold;
  }
`;

const ApplicantCard = ({firstName, lastName, email, phone, updateDate, bid, color} : DataType) => {
  return (
    <CardContainer>
      <Avatar textColor={color}>
        <span>{`${firstName[0]}${lastName[0]}`}</span>
      </Avatar>
      <span className="applicant-title">{firstName} {lastName}</span>
      <span className="applicant-subtitle">{phone}</span>
      <span className="applicant-subtitle">{email}</span>
      <div className="status-box">
        <FormattedMessage id="card_appointment" values={{date: formatDate(new Date(updateDate))}}/>
      </div>
      {bid && 
        <div className="status-box bid-box">
          <FormattedMessage id="card_bid" values={{amount: bid}}/>
        </div>
      }
    </CardContainer>
  );
}

export default ApplicantCard;
