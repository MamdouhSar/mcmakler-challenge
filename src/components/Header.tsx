import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import MenuIcon from '../assets/menu.svg';
import NotificationIcon from '../assets/notifications.svg';
import SupportIcon from '../assets/support.svg';
import UserIcon from '../assets/user.svg';
import SettingsIcon from '../assets/settings.svg';
import { FormattedMessage } from 'react-intl';

const HeaderContainer = styled.div`
  padding: 17px 24px 17px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .desktop-only {
    display: none;
  }

  & .menu-section {
    width: unset
  }

  & .logo-section {
    width: unset
  }

  & .settings-section {
    width: unset
  }
  
  @media (min-width: 720px) {
    padding: 24px 50px;
    justify-content: start;

    & .desktop-only {
      display: unset;
    }

    & .menu-section {
      width: 60px;
    }
  
    & .logo-section {
      width: 100%;
    }
  
    & .settings-section {
      width: 414px;
      display: flex;
      align-items: center;
      justify-content: start;

      & .settings-icons {
        margin-right: 32px;
      }

      & .support-section {
        display: flex;
        align-items: center;
        margin-right: 32px;
  
        & .support-icon {
          margin-right: 8px;
        }
      }
    }
  }
`;


const Header = () => {
  return (
    <HeaderContainer>
      <div className="menu-section">
        <img src={MenuIcon} alt="menu-icon"/>
      </div>
      <div className="logo-section">
        <img src={Logo} alt="logo"/>
      </div>
      <div className="settings-section">
        <div className={'support-section desktop-only'}>
          <img src={SupportIcon} alt="support-icon" className={'desktop-only support-icon'}/>
          <FormattedMessage id="contact_support"/>
        </div>
        <img src={NotificationIcon} alt="notifications-icon" className={'settings-icons'}/>
        <img src={UserIcon} alt="user-icon" className={'desktop-only settings-icons'}/>
        <img src={SettingsIcon} alt="settings-icon" className={'desktop-only'}/>
      </div>
    </HeaderContainer>
  );
}

export default Header;
