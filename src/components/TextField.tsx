import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { InputValue } from '../helpers/types';
import SearchIcon from '../assets/search.svg';

const InputContainer = styled.div`
  position: relative;
  padding: 0 32px;
  border: 1px solid #E6E6E6;
  border-radius: 4px;

  & .input-icon {
    position: absolute;
    top: 14px;
    left: 14px;
  }
`;

const InputField = styled.input`
  box-sizing: border-box;
  display: block;
  border: none;
  width: 100%;
  line-height: 1.2;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  border-radius: 4px;
  height: 45px;
  padding: 0 8px;

  &:focus {
    outline: none;
  }
`;

interface Props {
  placeholderId: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value?: InputValue
}

const TextField = ({ placeholderId, onChange, value } : Props) => {
  const intl = useIntl();
  return (
    <InputContainer>
      <InputField placeholder={intl.formatMessage({id: placeholderId})} value={value} onChange={onChange}/>
      <img src={SearchIcon} className="input-icon" alt="search-icon"/>
    </InputContainer>
  );
}

export default TextField;
