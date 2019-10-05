import React from 'react';
import data from '../Data/L20Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Other
import '../App.scss';

function L20() {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<h2 className="text-center font-weight-bold text-uppercase">MEDD LAZIM</h2>
					<h4 className="text-center">stalna dužina</h4>
				</Col>
			</Row>

			<Row>
				<Col>
					<br />
				</Col>
			</Row>

			<Row>
				<Col className="opisLekcije">
					Kada poslije <strong>dugog vokala</strong> A  <span className="arapski-lekcija">ـــَــ ا</span> , I<span className="arapski-lekcija"> ـــِـ ى </span>, U <span className="arapski-lekcija">ـــُــ و</span> dođe
					harf sa <strong>stalnim sukunom <span className="arapski-lekcija"> ـــْــ  </span></strong> <strong>ili tešdidom <span className="arapski-lekcija"> ـــّــ </span></strong>, bit
					će medd lazim . Traje obavezno 6 hareketa, npr.:<pre style={{display:"inline"}}>  </pre>{PlayerRow(data, 'row1')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row2')}</Col>
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

			<Row className="text-center">
				<Col>
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj10')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj9')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj13')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj12')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj11')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj15')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj14')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
				<span className='tacka'>۞</span>{VjezbeRow(data, 'vjezba', 'broj18')}
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj17')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj16')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col></Col>
			</Row>
			<hr />

			<Footer prev="/lekcija19" next="/lekcija21" />
		</React.Fragment>
	);
}

export default L20;