import React from "react";
import logo from "./logo.png";
import search from "./search.svg";
import mic from "./mic.svg";
import "./Home.css";

// console.log(logo);

function Home() {
  const headerLinks = [
    {
      title: "Gmail",
      href : 'https://mail.google.com/mail/&ogbl',
      type: 1,
    },
    {
      title: "Images",
      href : 'https://www.google.co.in/imghp?hl=en-GB&tab=ri&ogbl',
      type: 1,
    },
    {
      title: "Google Apps",
      href : 'https://www.google.co.in/intl/en/about/products?tab=wh',
      type: 1,
    },
    {
      title: "Sign In",
      href : 'https://accounts.google.com/signin/v2/identifier?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgoogle%2Bsignin%26oq%3Dgoogle%2Bsignin%26aqs%3Dchrome..69i57j69i64j69i60l3.3800j0j1%26sourceid%3Dchrome%26ie%3DUTF-8&ec=GAZAAQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin',
      type: 2,
    },
  ];

  return (
    <>
      <div className="content">
        <div className="home__header">
          {/* <div className="home__headerLeft"></div> */}
          <div className="home__headerRight">
            <nav>
              <ul className="navigation_bar">
                {headerLinks.map((link) => {
                  return (
                    <li>
                      <a
                        className={ link.type === 1 ? "navigation-links" : "sign_in" }
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        { link.title }
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
        <div className="home__body">
          <div className="google">
            <img src={logo} alt="Logo" className="google_logo" />
          </div>
          <div className="input_area">
            <div className="search input_search">
              <div className={'icon'}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              </div>
              <input
                type="text"
                placeholder="Search Google or type a URL"
              ></input>
              <div className={'icon'}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>
              </div>
            </div>
          </div>

          <div className="buttons">
            <div className="google_search">
              <a href="https://www.google.com/" className="googleSearch">
                Google Search
              </a>
            </div>
            <div className="i_m_feeling_lucky">
              <a href="https://www.google.com/doodles">I'm Feeling Lucky</a>
            </div>
          </div>

          <div className="languages">
            Google offered in:
            <a href="https://www.google.com/setprefs?sig=0_mEwLDj_p5fmY4e0LFsc2HRR8Ro4%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwiJzc6skN7zAhU9QvEDHdrJCDwQ2ZgBCA4">
              हिन्दी
            </a>
            <a href="https://www.google.com/setprefs?sig=0_mEwLDj_p5fmY4e0LFsc2HRR8Ro4%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwiJzc6skN7zAhU9QvEDHdrJCDwQ2ZgBCA8">
              বাংলা
            </a>
            <a href="https://www.google.com/setprefs?sig=0_mEwLDj_p5fmY4e0LFsc2HRR8Ro4%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwiJzc6skN7zAhU9QvEDHdrJCDwQ2ZgBCBA">
              తెలుగు
            </a>
            <a href="https://www.google.com/setprefs?sig=0_mEwLDj_p5fmY4e0LFsc2HRR8Ro4%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwiJzc6skN7zAhU9QvEDHdrJCDwQ2ZgBCBE">
              मराठी
            </a>
            <a href="https://www.google.com/setprefs?sig=0_mEwLDj_p5fmY4e0LFsc2HRR8Ro4%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwiJzc6skN7zAhU9QvEDHdrJCDwQ2ZgBCBI">
              தமிழ்
            </a>
            <a href="https://www.google.com/setprefs?sig=0_mEwLDj_p5fmY4e0LFsc2HRR8Ro4%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwiJzc6skN7zAhU9QvEDHdrJCDwQ2ZgBCBM">
              ગુજરાતી
            </a>
            <a href="https://www.google.com/setprefs?sig=0_mEwLDj_p5fmY4e0LFsc2HRR8Ro4%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwiJzc6skN7zAhU9QvEDHdrJCDwQ2ZgBCBQ">
              ಕನ್ನಡ
            </a>
            <a href="https://www.google.com/setprefs?sig=0_mEwLDj_p5fmY4e0LFsc2HRR8Ro4%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwiJzc6skN7zAhU9QvEDHdrJCDwQ2ZgBCBU">
              മലയാളം
            </a>
            <a href="https://www.google.com/setprefs?sig=0_mEwLDj_p5fmY4e0LFsc2HRR8Ro4%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwiJzc6skN7zAhU9QvEDHdrJCDwQ2ZgBCBY">
              ਪੰਜਾਬੀ
            </a>
          </div>
        </div>
      </div>

      <footer>
        <ul className="home__footer">
          <li className="footer_head">India</li>
        </ul>

        <div className="footer_foot">
          <ul className="left_items">
            <li>
              <a
                href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1"
                className="links"
              >
                {" "}
                About{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
                className="links"
              >
                {" "}
                Advertising{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
                className="links"
              >
                {" "}
                Business{" "}
              </a>
            </li>
            <li>
              <a
                href="https://google.com/search/howsearchworks/?fg=1"
                className="links"
              >
                {" "}
                How Search works{" "}
              </a>
            </li>
          </ul>

          <ul className="right_items">
            <li>
              <a
                href="https://policies.google.com/privacy?hl=en-IN&fg=1"
                className="links"
              >
                {" "}
                Privacy{" "}
              </a>
            </li>
            <li>
              <a
                href="https://policies.google.com/terms?hl=en-IN&fg=1"
                className="links"
              >
                {" "}
                Terms{" "}
              </a>
            </li>
            <li>
              <a href="#" className="links">
                {" "}
                Settings{" "}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Home;
