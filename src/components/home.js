import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './navBar';
import SimpleCard from './simpleCard';
import ProductCard from './productCard';
import BestSellers from './bestSellers';
import SimpleCardDark from './simpleCardDark';
import Footer from './footer';
import IntroCardDark from './introCardDark';
import ProductOneText from './productOneText';
import ProductTwoText from './productTwoText';
import ProductThreeText from './productThreeText';
import bandImg from '../assets/images/71360-Homepage-202008-Hero-Standard-Large.webp';
import trendOne from '../assets/images/31199-Zebra-Marvel-Homepage--072320--Block-Standard-Lifestyle.webp';
import trendTwo from '../assets/images/40428-HP-2020-Block-Standard.webp';
import trendThree from '../assets/images/43179-Disney-Characters-202006-Homepage-Still-Life-2-Block-Standard.webp';
import spotOne from '../assets/images/76153-HP-202006-Block-Standard.webp';
import spotTwo from '../assets/images/75941-Home-202006-Block-Standard.webp';
import pdtOne from '../assets/images/71369.webp';
import pdtTwo from '../assets/images/71367.webp';
import pdtThree from '../assets/images/71377.webp';
import bbOne from '../assets/images/31199.webp';
import bbTwo from '../assets/images/21322.webp';
import bbThree from '../assets/images/71361.webp';

class Home extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Container className="container-style">
					<Row lg={1}>
						<Col>
							<NavBar />
						</Col>
					</Row>
					<Row lg={1} className="card-area intro-card">
						<Col className="card-col">
							<IntroCardDark
								src={bandImg}
								title="Start the adventure"
								text="Take LEGO® fun to a whole new level with the new Adventures with Mario Starter Course."
							/>
						</Col>
					</Row>
					<Row lg={1} className="latest-label">
						<Col>
							<div>
								<span className="latest-title">Trending now</span>
							</div>
						</Col>
					</Row>
					<Row lg={3} className="card-area">
						<Col className="simple-card-left">
							<SimpleCardDark src={trendOne}  />
						</Col>
						<Col className="simple-card-mid">
							<SimpleCardDark src={trendTwo}  />
						</Col>
						<Col className="simple-card-right">
							<SimpleCard src={trendThree}  />
						</Col>
					</Row>
					<Row lg={3} className="best-label">
						<Col className="label-area">
							<div>
								<span className="latest-text">New exclusive Marvel Studios Iron Man</span>
							</div>
						</Col>
						<Col className="label-area">
							<div>
								<span className="latest-text">Capture a villain</span>
							</div>
						</Col>
						<Col className="label-area">
							<div>
								<span className="latest-text">Reconnect with old friends</span>
							</div>
						</Col>
					</Row>
					<Row lg={1} className="latest-label">
						<Col>
							<div>
								<span className="latest-title">Featured sets</span>
							</div>
						</Col>
					</Row>
					<Row className="product-intro product-intro-start">
						<Col md={5} className="product-intro-image">
							<ProductCard
								src={pdtOne}
								title="Bowser's Castle Boss Battle Expansion Set"
								price="$99.99"
							/>
						</Col>
						<Col md={7} className="product-intro-text">
							<ProductOneText />
						</Col>
					</Row>
					<Row className="product-intro ">
						<Col md={5} className="product-intro-image">
							<ProductCard src={pdtTwo} title="Mario’s House & Yoshi Expansion Set" price="$29.99" />
						</Col>
						<Col md={7} className="product-intro-text">
							<ProductTwoText />
						</Col>
					</Row>
					<Row className="product-intro">
						<Col md={5} className="product-intro-image">
							<ProductCard
								src={pdtThree}
								title="King Boo and the Haunted Yard Expansion Set"
								price="$49.99"
							/>
						</Col>
						<Col md={7} className="product-intro-text">
							<ProductThreeText />
						</Col>
					</Row>
					<Row lg={1} className="latest-label">
						<Col>
							<div>
								<span className="latest-title">Spotlight on</span>
							</div>
						</Col>
					</Row>
					<Row lg={2} className="card-area">
						<Col className="simple-card-left">
							<SimpleCard src={spotOne} text="Soar to victory" />
						</Col>
						<Col className="simple-card-right">
							<SimpleCard src={spotTwo} text="Stage ferocious fun" />
						</Col>
					</Row>
					<Row lg={1} className="latest-label">
						<Col>
							<div>
								<span className="latest-title">Recommended For You</span>
							</div>
						</Col>
					</Row>
					<Row lg={3} className="card-area">
						<Col className="product-card-left">
							<BestSellers src={bbOne} />
						</Col>
						<Col className="product-card-mid">
							<BestSellers src={bbTwo} />
						</Col>
						<Col className="product-card-right">
							<BestSellers src={bbThree} />
						</Col>
					</Row>
					<Footer />
				</Container>
			</React.Fragment>
		);
	}
}

export default Home;
