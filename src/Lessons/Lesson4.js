import React from 'react';
import data from '../Data/L4Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import { Link } from 'react-router-dom';
import LekcijaMenu from '../Body/LekcijaMenu';

// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Other
import '../App.scss';

function L4() {
	return (
		<React.Fragment>
			<LekcijaMenu broj="4" naziv="IDGAM MISLEJN"></LekcijaMenu>
			<Container>
			<Row>
				<Col>
					<div className="mobileTop">
						<center>
							<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} /> 
						</center>
						<h2 className="text-center font-weight-bold text-uppercase">IDGAM MISLEJN</h2>
					</div>
					<h4 className="text-center"><strong>uklapanje istih harfova</strong></h4>
					<hr />
				</Col>
			</Row>

			<Row>
				<Col>
					<br />
				</Col>
			</Row>

			<Row>
				<Col className="opisLekcije">
					Kada poslije bilo kojeg harfa sa <strong>sukunom <span className="arapski-lekcija">ـــْــ</span></strong>  dođe <u>isti</u> harf sa <strong>hareketom</strong>, 
					dolazi do <u>potpunog</u> uklapanja, tj. prvi harf se ne uči, a drugi se uči sa <strong>tešdidom</strong>, npr.:
				</Col>
			</Row>
			
			<Row>
				<Col>
					<br />
				</Col>
			</Row>			

      <Row className="text-center mobile-row">
				<Col>{PlayerRow(data, 'row1')}</Col>
			</Row>

      <Row className="text-center">
				<Col>{PlayerRow(data, 'row2')}</Col>
			</Row>

      <Row className="text-center">
				<Col>{PlayerRow(data, 'row3')}</Col>
			</Row>

			<Row>
				<Col>
					<br />
				</Col>
			</Row>
	
			<h2 className="text-center"><strong>VJEŽBA</strong></h2>
			<hr />
			<Row>
				<Col>
					<br />
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj15')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj16')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj17')} ۞</span>
				</Col>
			</Row>
			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj18')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj19')} ۞</span>
				</Col>
			</Row>
			<Row className="text-center">
				<Col />
			</Row>
			<Footer prev="/lekcija3" next="/lekcija5" />
			</Container>
		</React.Fragment>
	);
}

export default L4;
