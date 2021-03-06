import React from 'react';
import { Button } from 'antd';
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
import PropTypes from 'prop-types';

import './following.module.scss';

const Following = ({ props }) => (
  <div className="button">
    <Button type="link" shape="circle">
      <p className="text" style={{ color: props }}>LEER MÁS</p>
      <IosArrowForward onClick={() => alert('Hi!')} className="logo" fontSize="15px" color={props} />
    </Button>
  </div>
);

Following.protoTypes = {
  props: PropTypes.string,
};

export default Following;
