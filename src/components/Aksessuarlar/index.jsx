import React from 'react';
import Title from '../Title';
import Container from '../../layout';
import ProductSlider from '../ProductSlider';

const Aksessuarlar = ({ aksessuarlar }) => {
  return (
    <div id="aksessuarlar">
      <Title>Aksessuarlar</Title>
      <Container>
        <ProductSlider className={'aksessuar__slider'} dataProduct={aksessuarlar} />
      </Container>
    </div>
  );
};

export default Aksessuarlar;
