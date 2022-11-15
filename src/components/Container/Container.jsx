import React from 'react';
import Wrapper from './Container.styles';
import Header from '../Header/Header';

const Container = (props) => {

  return (
    <>
      <Header/>
      <Wrapper>
        {props.children}
      </Wrapper>
  </>
)}

export default Container;