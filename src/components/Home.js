import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
	return (
		<Carousel>
			<Carousel.Item interval={1000}>
				<img
					className='d-block w-100'
					src='https://hbomax-images.warnermediacdn.com/images/GXyLz4g8tcJ28vgEAAALQ/tile.jpeg?size=1280x720&format=jpeg&partner=hbomaxcom&productCode=hbomax&host=artist.api.cdn.hbo.com&w=1200 slide&bg=373940'
					alt='First slide'
				/>
			</Carousel.Item>
			<Carousel.Item interval={1000}>
				<img
					className='d-block w-100'
					src='https://simkl.net/fanart/76/7659806abce1bc3dc_0.jpg'
					alt='Second slide'
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src='https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2017/09/YuYuYu.jpg'
					alt='Third slide'
				/>
			</Carousel.Item>
		</Carousel>
	);
};

export default Home;
