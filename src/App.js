import "./App.css";

function App() {
  return (
    <main>
      <div className="container">
        <div className="card">
          <img src="/cardImg.png" alt="sami_image" className="img" />
          <div className="cardContent">
            <h1 className="name">sami ayachi</h1>
            <h4 className="job">Frontend Developer</h4>
            <h3 className="website">samiayachi.website</h3>
            <div className="button_block">
              <button className="emailButton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M2.10238 4.70721L8.49997 7.90561L14.8976 4.70721C14.8739 4.29957 14.6952 3.9164 14.3982 3.63619C14.1012 3.35598 13.7083 3.19994 13.3 3.20001H3.69998C3.29164 3.19994 2.89873 3.35598 2.60172 3.63619C2.3047 3.9164 2.12606 4.29957 2.10238 4.70721Z"
                    fill="#1E1F26"
                  />
                  <path
                    d="M14.9 6.49441L8.49997 9.69441L2.09998 6.49441V11.2C2.09998 11.6244 2.26855 12.0313 2.5686 12.3314C2.86866 12.6314 3.27563 12.8 3.69998 12.8H13.3C13.7243 12.8 14.1313 12.6314 14.4313 12.3314C14.7314 12.0313 14.9 11.6244 14.9 11.2V6.49441Z"
                    fill="#1E1F26"
                  />
                </svg>
                Email
              </button>
              <button className="linkedinButton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13.7143 1.33334H2.28278C1.75897 1.33334 1.33337 1.76489 1.33337 2.29465V13.7054C1.33337 14.2351 1.75897 14.6667 2.28278 14.6667H13.7143C14.2381 14.6667 14.6667 14.2351 14.6667 13.7054V2.29465C14.6667 1.76489 14.2381 1.33334 13.7143 1.33334ZM5.36314 12.7619H3.38695V6.39882H5.36611V12.7619H5.36314ZM4.37504 5.52977C3.74111 5.52977 3.22921 5.01489 3.22921 4.38394C3.22921 3.75299 3.74111 3.23811 4.37504 3.23811C5.00599 3.23811 5.52087 3.75299 5.52087 4.38394C5.52087 5.01787 5.00897 5.52977 4.37504 5.52977V5.52977ZM12.7709 12.7619H10.7947V9.66668C10.7947 8.92858 10.7798 7.97918 9.7679 7.97918C8.73814 7.97918 8.5804 8.78275 8.5804 9.61311V12.7619H6.60421V6.39882H8.50004V7.26787H8.52683C8.79171 6.76787 9.43754 6.24108 10.3989 6.24108C12.3989 6.24108 12.7709 7.55953 12.7709 9.27382V12.7619V12.7619Z"
                    fill="white"
                  />
                </svg>
                LinkedIn
              </button>
            </div>
            <div className="aboutSection">
              <h3 className="title">About</h3>
              <p className="subtitle">
                I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn.
              </p>
            </div>
            <div className="InterestSection">
              <h3 className="title">Interests</h3>
              <p className="subtitle">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon
                buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                fanatic.
              </p>
            </div>
            <div className="socialMedia">
              <img src="FacebookIcon.png" alt="FacebookIcon" />
              <img src="GitHubIcon.png" alt="GitHubIcon" />
              <img src="InstagramIcon.png" alt="Instagram Icon" />
              <img src="TwitterIcon.png" alt="Twitter Icon" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
