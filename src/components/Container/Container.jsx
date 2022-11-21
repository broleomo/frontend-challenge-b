import React from 'react';
import Wrapper from './Container.styles';
import Header from '../Header/Header';

const Container = (props) => {

  return (
    <>
      <Wrapper>
      <Header/>
        {props.children}
      </Wrapper>
  </>
)}

export default Container;