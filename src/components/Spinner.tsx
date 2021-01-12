import styled from 'styled-components';

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-top: 24px;

  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  & .spinner {
    width: 75px;
    height: 75px;
    margin: 0;
    background: transparent;
    border-top: 4px solid #4a4a4a;
    border-right: 4px solid transparent;
    border-radius: 50%;
    -webkit-animation: 1s spin linear infinite;
    animation: 1s spin linear infinite;
  }
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <div className="spinner"/>
    </SpinnerContainer>
  );
}

export default Spinner;