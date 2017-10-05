import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import close from '../../images/icon-x-gray.svg';

const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  z-index: 10;
`;
const ModalCard = styled.div`
  background-color: #e7e8ec;
  border-radius: 4px;
  height: auto;
  margin-top: 8vh;
  z-index: 30;
  padding: 0;
`;

const Heading = styled.div`
  height: 72px;
  padding: 24px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: #ffffff;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  color: #585b60;
  img {
    height: 16px;
    width: 16px;
    float: right;
    margin: 4px;
    cursor: pointer;
  }
`;

const Modal = props => (
  <Overlay>
    <ModalCard className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
      <Heading>
        {props.title}
        <img onClick={props.cancelModal} src={close} alt="Close Modal" />
      </Heading>
      {props.children}
    </ModalCard>
  </Overlay>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelModal: PropTypes.func.isRequired
};

export default Modal;
