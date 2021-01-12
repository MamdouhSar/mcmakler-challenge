import React from 'react';
import { useIntl } from 'react-intl';
import styled from 'styled-components';
import ChevronIcon from '../assets/chevron.svg';

const DropdownContainer = styled.div`
  position: relative;
  padding: 0 8px;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  min-width: 80px;

  & .input-icon {
    position: absolute;
    top: 14px;
    right: 14px;
  }
`;

const DropdownField = styled.input`
  box-sizing: border-box;
  display: block;
  border: none;
  line-height: 1.2;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  border-radius: 4px;
  height: 45px;
  padding: 0 8px;
  cursor: pointer;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

interface Props {
  placeholderId: string
}

const Dropdown = ({ placeholderId } : Props) => {
  const intl = useIntl();
  return (
    <DropdownContainer>
      <DropdownField placeholder={intl.formatMessage({id: placeholderId})} readOnly/>
      <img src={ChevronIcon} className="input-icon" alt="chevron-icon"/>
    </DropdownContainer>
  );
}

export default Dropdown;
