import React from 'react';
import data from '../Data/L11Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import Arabic from '../Letters/Arabic';
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

function L11() {
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
			<LekcijaMenu broj="11" naziv="IHFA" />
			<Container>
				<Row>
					<Col>
						<div className="mobileTop">
							<center>
								<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} alt="Group 61" />
							</center>
							<h2 className="text-center font-weight-bold text-uppercase" id="lekcija">
								11 IHFA
							</h2>
						</div>
						<h4 className="text-center">
							<strong>Skrivanje harfa N (ن)</strong>
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
						Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (
						<span className="arapski-lekcija">نْ</span>) ili <strong>tenvina</strong> EN{' '}
						<span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> dođe jedan od 15 harfova:{' '}
						<span style={{ display: 'inline-flex' }}>
							<Arabic arabic="ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق " key="arL11">
								{' '}
								ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق {' '}
							</Arabic>
						</span>
						, onda se harf <strong>N</strong> (
						<span className="arapski-lekcija">ن</span>) uči kroz nos u trajanju od 2 hareketa, s tim da
						jezik ne dotakne nepce, npr.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after">
					<Col>{PlayerRow(data, 'row1')}</Col>
				</Row>
				<Row className="text-center reorder-basic rtl">
					<Col>{PlayerRow(data, 'row2')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>
						{VjezbeRow(data, 'multirow', 'word1')}
						{PlayerRow(data, 'row3')}
					</Col>
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
				<Modal show={showL} onHide={handleCloseL} backdrop="static" keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>LEKCIJA</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal">
						<Row>
							<Col className="opisLekcije">
								Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (
								<span className="arapski-lekcija">نْ</span>) ili <strong>tenvina</strong> EN{' '}
								<span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
								<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
								<span className="arapski-lekcija">ــٌــ</span> dođe jedan od 15 harfova:{' '}
								<span style={{ display: 'inline-flex' }}>
									<Arabic arabic="ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق " key="arL11">
										{' '}
										ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق {' '}
									</Arabic>
								</span>
								, onda se harf <strong>N</strong> (
								<span className="arapski-lekcija">ن</span>) uči kroz nos u trajanju od 2 hareketa, s tim
								da jezik ne dotakne nepce, npr.:
							</Col>
						</Row>

						<Row>
							<Col>
								<br />
							</Col>
						</Row>

						<Row className="text-center reorder-basic-display-after">
							<Col>{PlayerRow(data, 'row1')}</Col>
						</Row>
						<Row className="text-center reorder-basic rtl">
							<Col>{PlayerRow(data, 'row2')}</Col>
						</Row>

						<Row className="text-center  rtl">
							<Col>
								{VjezbeRow(data, 'multirow', 'word1')}
								{PlayerRow(data, 'row3')}
							</Col>
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
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleCloseL}>
							Zatvori
						</Button>
					</Modal.Footer>
				</Modal>

				<h2 className="text-center" id="vjezba">
					<strong>VJEŽBA</strong>
				</h2>
				<hr />
				<IconContext.Provider value={{ size: '30px', style: { float: 'right' } }}>
					<MdZoomOutMap className="zoomIcon" onClick={handleShow} />
				</IconContext.Provider>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj7')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} </span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')} ۞</span>
					</Col>
				</Row>
				<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>VJEŽBA</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal">
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj7')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} </span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')} ۞</span>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Zatvori
						</Button>
					</Modal.Footer>
				</Modal>
				<Footer prev="/lekcija10" next="/lekcija12" />
			</Container>
		</React.Fragment>
	);
}

export default L11;
