import React from 'react';
import data from '../Data/L4Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import LekcijaMenu from '../Body/LekcijaMenu';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MdZoomOutMap } from 'react-icons/md';
import { IconContext } from 'react-icons';

// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Other
import '../App.scss';

function scrollToHash() {
	/* Obtain hash from current location (and trim off leading #) */
	const id = window.location.hash.substr(1);

	if (id) {
		/* Find matching element by id */
		const anchor = document.getElementById(id);

		if (anchor) {
			/* Scroll to that element if present */
			anchor.scrollIntoView();
		}
	}
}

function L4() {
	const [ show, setShow ] = React.useState(false);
	const [ showL, setShowL ] = React.useState(false);

	const handleCloseL = () => setShowL(false);
	const handleShowL = () => setShowL(true);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	React.useEffect(() => {
		scrollToHash();
	}, []);
	return (
		<React.Fragment>
			<LekcijaMenu broj="4" naziv="IDGAM MISLEJN" />
			<Container>
				<Row>
					<Col>
						<div className="mobileTop">
							<center>
								<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} alt="Group 61" />
							</center>
							<h2 className="text-center font-weight-bold text-uppercase" id="lekcija">
								4 IDGAM MISLEJN
							</h2>
						</div>
						<h4 className="text-center">
							<strong>Uklapanje istih harfova</strong>
						</h4>
						<hr />
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>
				<IconContext.Provider value={{ size: '30px', style: { float: 'right' } }}>
					<MdZoomOutMap className="zoomIcon" onClick={handleShowL} />
				</IconContext.Provider>
				<Row>
					<Col className="opisLekcije">
						Kada poslije bilo kojeg harfa sa{' '}
						<strong>
							sukunom <span className="arapski-lekcija">ـــْــ</span>
						</strong>{' '}
						dođe <u>isti</u> harf sa <strong>hareketom</strong>, dolazi do <u>potpunog</u> uklapanja, tj.
						prvi harf se ne uči, a drugi se uči sa <strong>tešdidom</strong>, npr.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder">
					<Col>{PlayerRow(data, 'row1')}</Col>,
				</Row>

				<Row className="text-center mobile-row rtl ">
					<Col>{PlayerRow(data, 'row2')}</Col>
				</Row>

				<Row className="text-center mobile-row  rtl">
					<Col>{PlayerRow(data, 'row3')}</Col>
				</Row>
				<Modal show={showL} onHide={handleCloseL} backdrop="static" keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>LEKCIJA</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal">
						<Row>
							<Col className="opisLekcije">
								Kada poslije bilo kojeg harfa sa{' '}
								<strong>
									sukunom <span className="arapski-lekcija">ـــْــ</span>
								</strong>{' '}
								dođe <u>isti</u> harf sa <strong>hareketom</strong>, dolazi do <u>potpunog</u>{' '}
								uklapanja, tj. prvi harf se ne uči, a drugi se uči sa <strong>tešdidom</strong>, npr.:
							</Col>
						</Row>

						<Row>
							<Col>
								<br />
							</Col>
						</Row>

						<Row className="text-center reorder">
							<Col>{PlayerRow(data, 'row1')}</Col>,
						</Row>

						<Row className="text-center">
							<Col>{PlayerRow(data, 'row2')}</Col>
						</Row>

						<Row className="text-center">
							<Col>{PlayerRow(data, 'row3')}</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleCloseL}>
							Zatvori
						</Button>
					</Modal.Footer>
				</Modal>
				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<h2 className="text-center" id="vjezba">
					<strong>VJEŽBA</strong>
				</h2>
				<hr />
				<Row>
					<Col>
						<br />
					</Col>
				</Row>
				<IconContext.Provider value={{ size: '30px', style: { float: 'right' } }}>
					<MdZoomOutMap className="zoomIcon" onClick={handleShow} />
				</IconContext.Provider>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj17')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj18')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj19')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col />
				</Row>
				<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>VJEŽBA</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal">
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj17')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj18')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj19')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col />
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Zatvori
						</Button>
					</Modal.Footer>
				</Modal>
				<Footer prev="/lekcija3" next="/lekcija5" />
			</Container>
		</React.Fragment>
	);
}

export default L4;
