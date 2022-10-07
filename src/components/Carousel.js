import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={require("./img/doctor-strange-wide.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Doctor Strange in the Multiverse of Madness</h3>
          <p>Sinopsis Doctor Strange in the Multiverse of Madness mengisahkan Stephen Strange yang kedatangan tamu dari semesta lain, yaitu America Chavez. Kehadiran America ke semesta Strange yang berada di universe utama MCU adalah untuk meminta bantuan sang superhero</p>
          <Button variant="danger" type="submit">Watch Trailer</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./img/black-adam.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Black Adam</h3>
          <p>Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods and imprisoned just as quickly Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.</p>
          <Button variant="danger" type="submit">Watch Trailer</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./img/loki.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Loki</h3>
          <p>
          Penjahat lincah Loki melanjutkan perannya sebagai Dewa Mischief setelah peristiwa "Avengers: Endgame".
          </p>
          <Button variant="danger" type="submit">Watch Trailer</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;