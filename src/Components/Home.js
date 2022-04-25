import Slider from "react-slick";

const Home = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 2000,
  };
  console.log({ data });
  return (
    <div className="home">
      <h1>Crypto Hunter</h1>
      <Slider {...settings}>
        {data.map((item) => (
          <div>
            <img src={item.image} />
            <p>{item.name}</p>
            <h3>{item.current_price}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
