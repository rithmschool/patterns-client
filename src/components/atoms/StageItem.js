import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import remove from '../../images/icon-x-circle-gray.svg';

const StageLineStyle = styled.div`
  border-bottom: 1px solid rgba(194, 203, 211, 0.5);
  width: 100%;
`;

const StageItemStyle = styled.p`
  width: 90%;
  height: 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.71;
  text-align: left;
  color: #25272a;
  margin-top: 6px;
  margin-bottom: 6px;
  display: inline-block;
`;

const ImgStyle = styled.img`
  height: 16px;
  width: 16px;
  float: right;
  margin: 10px 0px 10px 0px;
  cursor: pointer;
`;

const StageItem = props => {
  const deleteStage = () => {
    props.handleDelete(props.id);
  };

  return (
    <StageLineStyle>
      <StageItemStyle>{props.stageItem}</StageItemStyle>
      <ImgStyle onClick={deleteStage} src={remove} alt="Remove Stage" />
    </StageLineStyle>
  );
};

StageItem.propTypes = {
  stageItem: PropTypes.string,
  handleDelete: PropTypes.func.isRequired
};

export default StageItem;
