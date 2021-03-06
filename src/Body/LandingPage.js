import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { BsFillPersonFill, BsArrowRight } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import BrowserMessage from './BrowserMessage';
import { detect } from '../Helpers/BrowserDetect';

function LandingPage(props) {
	const [ isHidden, setIsHidden ] = useState(true);
	const [ showSuccessMessage, setShowSuccessMessage ] = useState(false);
	const [ showErrorMessage, setShowErrorMessage ] = useState(false);
	const [ fullName, setFullName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ message, setMessage ] = useState('');
	const timerToClearSomewhere = useRef(null); //now you can pass timer to another component
	const [ browserVersion, setBrowserVersion ] = useState('');
	const [ browser, setBrowser ] = useState('');

	useEffect(() => {
		const [ browser, version ] = detect().split(' ');
		setBrowser(browser);
		setBrowserVersion(version);
		return () => clearTimeout(timerToClearSomewhere.current);
	}, []);

	const toggleIsHiddenHandler = () => {
		setIsHidden(!isHidden);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = { 'Ime i Prezime': fullName, Email: email, 'Broj Telefona': phone, Poruka: message };
		window.Pageclip.send('wRH1bp6IBZe5paTzYnZGFFEt4NhsZmh9', 'default', data, function(error, response) {
			// console.log('saved?', !!error, '; response:', error || response);
			if (!error) {
				setShowSuccessMessage(true);
				timerToClearSomewhere.current = setTimeout(() => setShowSuccessMessage(false), 3000);
			} else {
				setShowErrorMessage(true);
				timerToClearSomewhere.current = setTimeout(() => {
					setShowErrorMessage(false);
				}, 3000);
			}
			setFullName('');
			setEmail('');
			setPhone('');
			setMessage('');
		});
	};
	return (
		<React.Fragment>
			<div className="wrapper">
				<div className="topNav">
					<div className="logoNavBox">
						<Link to="/">
							<img
								className="logoUrl"
								src={process.env.PUBLIC_URL + '/assets/svg/logoUrl.png'}
								alt="logo"
							/>
						</Link>
					</div>
					<div className="nav">
						<ul>
							<Link to={'/lekcije'}>
								<li className="selectedBtn">LEKCIJE</li>
							</Link>

							<a href="#o-nama">
								<li>O NAMA</li>
							</a>

							<a href="#printano">
								<li>PRINTANO IZDANJE</li>
							</a>
							<a href="#kontakt">
								<li>KONTAKT</li>
							</a>
						</ul>
					</div>
				</div>

				<div className="topMobileNav">
					<img
						className="hamburger"
						src={process.env.PUBLIC_URL + '/assets/svg/hamburger.svg'}
						alt="hamburger menu icon"
						onClick={toggleIsHiddenHandler}
					/>

					<Link to={'/'}>
						<img
							className="mobileLogo"
							src={process.env.PUBLIC_URL + '/assets/svg/mobileLogo.png'}
							alt="mobile logo"
						/>
					</Link>
					<div>
						<Link to={'/lekcije'}>
							<BsArrowRight size={32} className="mobNavArrow" />
						</Link>
					</div>

					<div className={isHidden ? 'hide' : 'fullMenu'}>
						<h3 className="closeBTN" onClick={toggleIsHiddenHandler}>
							<AiOutlineCloseCircle />
						</h3>
						<center>
							<ul>
								<Link to={'/lekcije'}>
									<li className="selectedBtn">LEKCIJE</li>
								</Link>
								<a href="#o-nama" onClick={toggleIsHiddenHandler}>
									<li>O NAMA</li>
								</a>
								<a href="#printano" onClick={toggleIsHiddenHandler}>
									<li>PRINTANO IZDANJE</li>
								</a>

								<a href="#kontakt" onClick={toggleIsHiddenHandler}>
									<li>KONTAKT</li>
								</a>
							</ul>
						</center>
					</div>
				</div>

				<div className="innerWrapper">
					<img
						className="quranbg"
						src={process.env.PUBLIC_URL + '/assets/svg/quranbg.svg'}
						alt="quran background"
					/>
					<div className="sectionOne">
						<div className="left">
							<h2>
								<b>Tedžvid.ba</b>
							</h2>
							<p>Priručnik za učenje tedžvidskih pravila</p>

							<Link to={'/lekcije'}>
								<button type="submit" className="contactBTN btn-lekcije">
									LEKCIJE
								</button>
							</Link>
						</div>
						<div className="right">
							<img
								className="quran"
								src={process.env.PUBLIC_URL + '/assets/svg/quran03.png'}
								alt="Quran"
							/>
						</div>
					</div>
					<center style={{ display: 'inline-flex' }}>
						<div className="description" id="o-nama">
							<br />
							<h2 className="white">O NAMA</h2>
							<p>
								Tedzvid.ba je elektronska, interaktivna verzija printanog tedžvida autora mr. Sejid ef.
								Strike. Ovaj tedžvid ima za cilj da pomogne novim učačima Kur'ana, kako polaznicima
								mektepske nastave tako i odraslima, u lakšem savladavanju osnovnih tedžvidskih pravila.
								Jednostavan rječnik i izbjegavanje stručnih termina, koliko je to bilo moguće, čine ga
								pristupačnijim široj čitalačkoj populaciji.
								<br />
								<br /> Posebnost stranice tedzvid.ba su interaktivni primjeri čiji audio zapis možete
								preslušati klikom na isti, a video zapis nakon vježbe će vam pomoći da lakše razumijete
								tedžvidsko pravilo koje želite savladati. Nadamo se da će tedžvid.ba pomoći mu'allimima
								pri objašnjavanju tedžvidskih pravila, kako djeci u mektebu tako i odraslima nakon
								završetka sufare.
							</p>
						</div>
					</center>
					<div className="sectionTwo" id="printano">
						<div className="book">
							<img className="bookImg" src={process.env.PUBLIC_URL + '/assets/svg/book.png'} alt="Book" />
						</div>
						<IconContext.Provider value={{ color: 'white', className: 'global-className-name' }}>
							<div className="bookInfo">
								<b>
									<h2>Želim printano izdanje</h2>
								</b>
								<br />
								<h6>Informacije vazano za printano izdanje tedžvida možete dobiti kod autora:</h6>
								<br />
								<div className="iconWrapper">
									<div className="iconInfo">
										<div className="iconbg">
											<BsFillPersonFill size={32} />
										</div>

										<p>mr. Sejid ef. Strika</p>
									</div>
									<div className="iconInfo">
										<a href="mailto:sejidstrika@tedzvid.ba">
											<div className="iconbg">
												<MdEmail size={32} />
											</div>
										</a>
										<p>sejidstrika@tedzvid.ba</p>
									</div>

									<div className="iconInfo">
										<a href="viber://chat?number=0038761617606">
											<div className="iconbg">
												<FiPhoneCall size={32} />
											</div>
										</a>
										<p>+38761 617 606</p>
									</div>
								</div>
							</div>
						</IconContext.Provider>
					</div>

					<div className="sectionThree" id="kontakt">
						<center>
							<h2>
								<b>Kontakt</b>
							</h2>
							<br />
							<p>
								Ukoliko imate neke sugestije, zapažanja, impresije budite slobodni da ih napišete kako
								bismo unaprijedili ovaj sajt.
							</p>

							<form onSubmit={handleSubmit}>
								<input
									type="text"
									placeholder="Ime i prezime"
									name="ime i prezime"
									value={fullName}
									onChange={(e) => {
										setFullName(e.target.value);
									}}
									required
								/>
								<input
									type="email"
									placeholder="Email"
									name="email"
									id=""
									required
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
								<input
									type="tel"
									placeholder="Broj telefona"
									name="broj telefona"
									id=""
									value={phone}
									onChange={(e) => {
										setPhone(e.target.value);
									}}
								/>
								<textarea
									className="textInput"
									placeholder="Unesi sadržaj poruke"
									type="text"
									name="poruka"
									id=""
									required
									value={message}
									onChange={(e) => {
										setMessage(e.target.value);
									}}
								/>
								<div className={showSuccessMessage ? 'success_message' : 'hide'}>
									<span className="closebtn" onClick={() => setShowSuccessMessage(false)}>
										&times;
									</span>
									<strong>Uspješno</strong> ste poslali vašu poruku!
								</div>
								<div className={showErrorMessage ? 'error_message' : 'hide'}>
									<span className="closebtn" onClick={() => setShowErrorMessage(false)}>
										&times;
									</span>
									Došlo je do greške prilikom slanja poruke!
								</div>
								<button type="submit" className="pageclip-form__submit contactBTN">
									<span>POŠALJI</span>
								</button>
							</form>
						</center>
					</div>
				</div>
				<footer className="footerLanding">
					<h2>Prijatelji projekta:</h2>
					<ul>
						<li>
							<a href="https://imtec.ba/" target="_blank" rel="noopener noreferrer">
								<img src={process.env.PUBLIC_URL + '/assets/svg/imtec_logo.png'} alt="" />
							</a>
						</li>
						<li>
							<a href="https://smartlab.ba/" target="_blank" rel="noopener noreferrer">
								<img src={process.env.PUBLIC_URL + '/assets/svg/smartlab_logo.svg'} alt="" />
							</a>
						</li>
					</ul>
				</footer>
				<BrowserMessage browser={browser} browserVersion={browserVersion} />
			</div>
		</React.Fragment>
	);
}
// function closeMobileNav() {
//     document.getElementsByClassName("fullMenu")[0].style.display = "none";
// }
export default LandingPage;
