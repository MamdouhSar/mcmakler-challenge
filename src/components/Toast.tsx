import React from 'react';
import styled from 'styled-components';

const toastColors = {
  "success": "#4caf50",
  "error": "#f44336",
  "warning": "#ff9800"
};

interface ContainerProps {
  type: "success" | "error" | "warning"
}

const ToastContainer = styled.div<ContainerProps>`
  @keyframes slide-up{
    0% {
        transform:  translate(0px,40px)  ;
    }
    100% {
        transform:  translate(0px,0px)  ;
    }
  }

  position: fixed;
  cursor: pointer;
  right: calc(50% - 176px);
  bottom: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  min-width: 300px;
  background-color: ${p => toastColors[p.type]};
  padding: 16px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  z-index: 1000;
  -webkit-animation: 0.2s slide-up linear;
  animation: 0.2s slide-up linear;
`;

interface Props extends ContainerProps{
  message: string,
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Toast = ({message, type, onClick}: Props) => {
  return (
    <ToastContainer type={type} onClick={onClick}>
      {message}
    </ToastContainer>
  );
}
export default Toast;