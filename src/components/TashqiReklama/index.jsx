import React from 'react';
import Title from '../Title';
import ProductSlider from '../ProductSlider';
import Container from '../../layout';

const TashqiReklama = ({ tashqiRekalama }) => {
  return (
    <div id="tashqireklama">
      <Container>
        <Title>Tashqi Reklama</Title>
        <ProductSlider dataProduct={tashqiRekalama} />
      </Container>
    </div>
  );
};

export default TashqiReklama;
