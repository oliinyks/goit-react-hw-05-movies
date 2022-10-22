import React from 'react';
import {Loading, Spinner} from './Loader.styled';

export const Loader = () => {
  return (
    <Loading>
      <Spinner></Spinner>
    </Loading>
  );
}