import React from 'react';
import data from '../Data/L3Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import { Link } from 'react-router-dom';
import LekcijaMenu from '../Body/LekcijaMenu';

// Bootstrap
import { Row, Col, Table, Container } from 'react-bootstrap';

// Other
import '../App.scss';

function L3() {
	return (
		<React.Fragment>
		<LekcijaMenu broj="3" naziv="LAFZATULLAH"></LekcijaMenu>	
		<Container>
			<Row>
				<Col>
					<div className="mobileTop">
						<center>
							<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} /> 
						</center>
						<h2 className="text-center font-weight-bold text-uppercase">LAFZATULLAH</h2>
					</div>
					<h4 className="text-center">
					<strong>izgovaranje riječi Allah <span className="arapski-lekcija"> اللّٰه </span></strong>
					</h4>
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
					Kada prije riječi Allah <span className="arapski-lekcija" >
						{' '}
						اللّٰه{' '}
					</span>dođe <strong>vokal</strong> E{' '}
					<span className="arapski-lekcija" >
						{' '}
						ــــَـــ{' '}
					</span>ili <strong>vokal</strong> U<span className="arapski-lekcija">
						ــــُـــ{' '}
					</span>, riječ Allah
					<span className="arapski-lekcija" >
						اللّٰه{' '}
					</span>se uči <u>krupno</u>, npr.: {' '}
					{PlayerRow(data, 'row1')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>{VjezbeRow(data, 'multirow', 'row2')}</Col>
			</Row>

			<Row>
				<Col className="opisLekcije">
					Kada prije riječi Allah<span className="arapski-lekcija" >
						{' '}
						اللّٰه
					</span>{' '}
					dođe <strong>vokal</strong> I<span className="arapski-lekcija">
						{' '}
						ــــِــ
					</span>, riječ Allah<span className="arapski-lekcija" >
						{' '}
						اللّٰه
					</span>{' '}
					se uči <u>tanko</u>, npr.:
				</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row3')}</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row4')}</Col>
			</Row>

			<Row>
				<Col>
					<br />
				</Col>
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
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj9')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj8')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj11')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj10')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj13')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj12')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					{VjezbeRow(data, 'vjezba', 'broj15')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj14')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj17')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj16')}
				</Col>
			</Row>
				<Footer prev="/lekcija2" next="/lekcija4" />
			</Container>
		</React.Fragment>
	);
}

export default L3;
