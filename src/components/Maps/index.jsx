import Container from '../../layout';
import Title from '../Title';
import classes from './Maps.module.scss';
const Maps = () => {
  return (
    <div>
      <Title>Biznig Manzil</Title>
      <Container>
        <div className={classes['maps']}>
          <iframe
            title="Aliprint location on Google Maps"
            className={classes['maps__item']}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463.802897943831!2d69.19783895442791!3d41.27963528188581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a26804430e3%3A0x491c79d927eced3f!2sALIPRINT!5e0!3m2!1ses!2str!4v1718736038737!5m2!1ses!2str"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"/>
        </div>
      </Container>
    </div>
  );
};

export default Maps;
