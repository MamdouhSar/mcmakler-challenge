import styled from 'styled-components';

const Paper = styled.div`
  padding: 24px 16px;
  border-radius: 3px;
  background-color: #fff;

  @media (min-width: 720px) {
    padding: 32px 24px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
  }
`;

export default Paper;