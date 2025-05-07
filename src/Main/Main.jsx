import React, { useState, useEffect, use } from "react";
import "./Main.css";
import mp44 from "../assets/mp44.png";
import GES from "../assets/GES.svg";
import acces from "../assets/acces2.png";
import telephoner from "../assets/appel.png";
import domicile from "../assets/house.png";
import stockk from "../assets/stock.jpg";

const Main = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const [sectionTwoShowed, setSectionTwoShowed] = useState(false);
  const [NotaireShow, setNotaireShow] = useState(false);
  const [img2, setImg2] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow2(true);
    }, 5000); // 2 seconds delay for show2 to show

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow3(true);
    }, 5200); // 2 seconds delay for show3 to show

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow4(true);
    }, 5500); // 2 seconds delay for show4 to show

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImg2(true);
    }, 2500);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotaireShow(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSectionTwoShowed(true);
    }, 4000); // 2 seconds delay for section two to show

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="Main">
      <section className="sectionOne">
        <div className="upper">
          <div className="NotaireImg">
            <img
              width="180"
              height="170"
              src={GES}
              alt="nothing yet"
              className={animationDone ? "logoAnimate" : "logoHold"}
            />
          </div>

          <div className={`byMp44 ${NotaireShow ? "show" : ""}`}>
            <p>by</p>

            <img src={mp44} height="80" width="80" alt="" />
          </div>
        </div>
      </section>

      <section className="sectionTwo">
        <div className="elements">
          <div className={`priority ${sectionTwoShowed ? "show" : ""}`}>
            <div class="group">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>

              <input
                id="query"
                class="input"
                type="search"
                placeholder="Search..."
                name="searchbar"
              />
            </div>
            <h1 style={{ color: "white", width: "35%", fontSize: "20px" }}>
              MAISON REGIONALE DES SPORTS : 13 rue Jean Moulin 54510 TOMBLAINE
            </h1>
          </div>

          <div className="secondary">
            <a
              href="https://www.grandest.fr/contact/"
              rel="noopener noreferrer"
              className={`hidden ${show2 ? "show2" : ""}`}
            >
              <div className="card">
                <img src={stockk} alt="" />
                <h1 className="angled-shadow">REGION GRAND EST</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/wp-content/uploads/2025/01/tomblaine.pdf"
              className={`hidden ${show3 ? "show2" : ""}`}
            >
              <div className="item three">
                <img src={acces} alt="" height="140" width="150" />
                <h1>ASPTT COMITE REGIONAL GRAND EST</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/fonctionnement-de-la-region/les-maisons-de-la-region/#flex_image__video"
              rel="noopener noreferrer"
              className={`hidden ${show4 ? "show2" : ""}`}
            >
              <div className="item four">
                <img src={domicile} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  ATHLETISME LIGUE REGIONALE GRAND EST
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/contact/"
              rel="noopener noreferrer"
              className={`hidden ${show2 ? "show2" : ""}`}
            >
              <div className="item two">
                <img src={telephoner} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  AVIRON LIGUE REGIONALE GRAND EST
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/wp-content/uploads/2025/01/tomblaine.pdf"
              className={`hidden ${show3 ? "show2" : ""}`}
            >
              <div className="item three">
                <img src={acces} alt="" height="140" width="150" />
                <h1>BADMINTON LIGUE REGIONALE GRAND EST</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/fonctionnement-de-la-region/les-maisons-de-la-region/#flex_image__video"
              rel="noopener noreferrer"
              className={`hidden ${show4 ? "show2" : ""}`}
            >
              <div className="item four">
                <img src={domicile} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  BASKET LIGUE REGIONALE GRAND EST
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/contact/"
              rel="noopener noreferrer"
              className={`hidden ${show2 ? "show2" : ""}`}
            >
              <div className="item two">
                <img src={telephoner} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  CANOE KAYAK COMITE REGIONAL GRAND EST
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/wp-content/uploads/2025/01/tomblaine.pdf"
              className={`hidden ${show3 ? "show2" : ""}`}
            >
              <div className="item three">
                <img src={acces} alt="" height="140" width="150" />
                <h1>CRESS GRAND EST</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/fonctionnement-de-la-region/les-maisons-de-la-region/#flex_image__video"
              rel="noopener noreferrer"
              className={`hidden ${show4 ? "show2" : ""}`}
            >
              <div className="item four">
                <img src={domicile} alt="" height="100" width="100" />
                <h1 className="angled-shadow">CROS GRAND EST</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/contact/"
              rel="noopener noreferrer"
              className={`hidden ${show2 ? "show2" : ""}`}
            >
              <div className="item two">
                <img src={telephoner} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  CYCLISME COMITE REGIONAL GRAND EST
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/wp-content/uploads/2025/01/tomblaine.pdf"
              className={`hidden ${show3 ? "show2" : ""}`}
            >
              <div className="item three">
                <img src={acces} alt="" height="140" width="150" />
                <h1>EQUITATION COMITE REGIONAL GRNAD EST</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/fonctionnement-de-la-region/les-maisons-de-la-region/#flex_image__video"
              rel="noopener noreferrer"
              className={`hidden ${show4 ? "show2" : ""}`}
            >
              <div className="item four">
                <img src={domicile} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  EPGV COMITE REGIONAL GRAND EST{" "}
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/contact/"
              rel="noopener noreferrer"
              className={`hidden ${show2 ? "show2" : ""}`}
            >
              <div className="item two">
                <img src={telephoner} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  EPGV COMITE DEPARTEMENTAL MEURTHE ET MOSELLE
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/wp-content/uploads/2025/01/tomblaine.pdf"
              className={`hidden ${show3 ? "show2" : ""}`}
            >
              <div className="item three">
                <img src={acces} alt="" height="140" width="150" />
                <h1>ESCRIME LIGUE REGIONALE GRAND EST</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/fonctionnement-de-la-region/les-maisons-de-la-region/#flex_image__video"
              rel="noopener noreferrer"
              className={`hidden ${show4 ? "show2" : ""}`}
            >
              <div className="item four">
                <img src={domicile} alt="" height="100" width="100" />
                <h1 className="angled-shadow">FNMNS</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/contact/"
              rel="noopener noreferrer"
              className={`hidden ${show2 ? "show2" : ""}`}
            >
              <div className="item two">
                <img src={telephoner} alt="" height="100" width="100" />
                <h1 className="angled-shadow">FNMNS CNF</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/wp-content/uploads/2025/01/tomblaine.pdf"
              className={`hidden ${show3 ? "show2" : ""}`}
            >
              <div className="item three">
                <img src={acces} alt="" height="140" width="150" />
                <h1>GOLF LIGUE REGIONALE GRAND EST</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/fonctionnement-de-la-region/les-maisons-de-la-region/#flex_image__video"
              rel="noopener noreferrer"
              className={`hidden ${show4 ? "show2" : ""}`}
            >
              <div className="item four">
                <img src={domicile} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  {" "}
                  GYMNASTIQUE COMITE REGIONAL GRAND EST
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/contact/"
              rel="noopener noreferrer"
              className={`hidden ${show2 ? "show2" : ""}`}
            >
              <div className="item two">
                <img src={telephoner} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  HANDBALL LIGUE REGIONALE GRAND EST
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/wp-content/uploads/2025/01/tomblaine.pdf"
              className={`hidden ${show3 ? "show2" : ""}`}
            >
              <div className="item three">
                <img src={acces} alt="" height="140" width="150" />
                <h1>HANDBALL COMITE DEPARTEMENTAL MEURTHE ET MOSELLE</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/fonctionnement-de-la-region/les-maisons-de-la-region/#flex_image__video"
              rel="noopener noreferrer"
              className={`hidden ${show4 ? "show2" : ""}`}
            >
              <div className="item four">
                <img src={domicile} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  HANDISPORT COMITE REGIONAL GRAND EST
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/contact/"
              rel="noopener noreferrer"
              className={`hidden ${show2 ? "show2" : ""}`}
            >
              <div className="item two">
                <img src={telephoner} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  HANDISPORT COMITE DEPARTEMENTAL MEURTHE ET MOSELLE
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/wp-content/uploads/2025/01/tomblaine.pdf"
              className={`hidden ${show3 ? "show2" : ""}`}
            >
              <div className="item three">
                <img src={acces} alt="" height="140" width="150" />
                <h1>JUDO LIGUE REGIONALE GRAND EST</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/fonctionnement-de-la-region/les-maisons-de-la-region/#flex_image__video"
              rel="noopener noreferrer"
              className={`hidden ${show4 ? "show2" : ""}`}
            >
              <div className="item four">
                <img src={domicile} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  JUDO COMITE DEPARTEMENTAL MEURTHE ET MOSELLE
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/contact/"
              rel="noopener noreferrer"
              className={`hidden ${show2 ? "show2" : ""}`}
            >
              <div className="item two">
                <img src={telephoner} alt="" height="100" width="100" />
                <h1 className="angled-shadow">LORRAINE MOUVEMENT ASSOCIATIF</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/wp-content/uploads/2025/01/tomblaine.pdf"
              className={`hidden ${show3 ? "show2" : ""}`}
            >
              <div className="item three">
                <img src={acces} alt="" height="140" width="150" />
                <h1>MOTOCYCLISME LIGUE REGIONALE GRAND EST</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/fonctionnement-de-la-region/les-maisons-de-la-region/#flex_image__video"
              rel="noopener noreferrer"
              className={`hidden ${show4 ? "show2" : ""}`}
            >
              <div className="item four">
                <img src={domicile} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  NATATION LIGUE REGIONALE GRAND EST
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/contact/"
              rel="noopener noreferrer"
              className={`hidden ${show2 ? "show2" : ""}`}
            >
              <div className="item two">
                <img src={telephoner} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  COMITE PARALYMPIQUE ET SPORTIF Français
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/wp-content/uploads/2025/01/tomblaine.pdf"
              className={`hidden ${show3 ? "show2" : ""}`}
            >
              <div className="item three">
                <img src={acces} alt="" height="140" width="150" />
                <h1>PETANQUE COMITE DEPARTEMENTAL MEURTHE ET MOSELLE</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/fonctionnement-de-la-region/les-maisons-de-la-region/#flex_image__video"
              rel="noopener noreferrer"
              className={`hidden ${show4 ? "show2" : ""}`}
            >
              <div className="item four">
                <img src={domicile} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  RANDONNEE PEDESTRE COMITE REGIONAL GRAND EST
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/contact/"
              rel="noopener noreferrer"
              className={`hidden ${show2 ? "show2" : ""}`}
            >
              <div className="item two">
                <img src={telephoner} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  RANDONNEE PEDESTRE COMITE DEPARTEMENTAL MEURTHE ET MOSELLE
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/wp-content/uploads/2025/01/tomblaine.pdf"
              className={`hidden ${show3 ? "show2" : ""}`}
            >
              <div className="item three">
                <img src={acces} alt="" height="140" width="150" />
                <h1>RUGBY LIGUE REGIONALE GRAND EST</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/fonctionnement-de-la-region/les-maisons-de-la-region/#flex_image__video"
              rel="noopener noreferrer"
              className={`hidden ${show4 ? "show2" : ""}`}
            >
              <div className="item four">
                <img src={domicile} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  SPELEOLOGIE LIGUE REGIONALE GRAND EST{" "}
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/contact/"
              rel="noopener noreferrer"
              className={`hidden ${show2 ? "show2" : ""}`}
            >
              <div className="item two">
                <img src={telephoner} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  SPORT ADAPTE LIGUE REGIONALE GRAND EST
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/wp-content/uploads/2025/01/tomblaine.pdf"
              className={`hidden ${show3 ? "show2" : ""}`}
            >
              <div className="item three">
                <img src={acces} alt="" height="140" width="150" />
                <h1>SPORT AUTOMOBILE LIGUE REGIONALE GRAND EST</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/fonctionnement-de-la-region/les-maisons-de-la-region/#flex_image__video"
              rel="noopener noreferrer"
              className={`hidden ${show4 ? "show2" : ""}`}
            >
              <div className="item four">
                <img src={domicile} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  SPORT POUR TOUS COMITE REGIONAL GRAND EST
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/contact/"
              rel="noopener noreferrer"
              className={`hidden ${show2 ? "show2" : ""}`}
            >
              <div className="item two">
                <img src={telephoner} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  TAEKWONDO LIGUE REGIONALE GRAND EST
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/wp-content/uploads/2025/01/tomblaine.pdf"
              className={`hidden ${show3 ? "show2" : ""}`}
            >
              <div className="item three">
                <img src={acces} alt="" height="140" width="150" />
                <h1>TENNIS LIGUE REGIONALE GRAND EST </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/fonctionnement-de-la-region/les-maisons-de-la-region/#flex_image__video"
              rel="noopener noreferrer"
              className={`hidden ${show4 ? "show2" : ""}`}
            >
              <div className="item four">
                <img src={domicile} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  TENNIS DE TABLE LIGUE REGIONALE GRAND EST
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/contact/"
              rel="noopener noreferrer"
              className={`hidden ${show2 ? "show2" : ""}`}
            >
              <div className="item two">
                <img src={telephoner} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  TRIATHLON LIGUE REGIONALE GRAND EST
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/wp-content/uploads/2025/01/tomblaine.pdf"
              className={`hidden ${show3 ? "show2" : ""}`}
            >
              <div className="item three">
                <img src={acces} alt="" height="140" width="150" />
                <h1>UNSS</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/fonctionnement-de-la-region/les-maisons-de-la-region/#flex_image__video"
              rel="noopener noreferrer"
              className={`hidden ${show4 ? "show2" : ""}`}
            >
              <div className="item four">
                <img src={domicile} alt="" height="100" width="100" />
                <h1 className="angled-shadow">
                  VOLLEY BALL LIGUE REGIONALE GRAND EST
                </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/contact/"
              rel="noopener noreferrer"
              className={`hidden ${show2 ? "show2" : ""}`}
            >
              <div className="item two">
                <img src={telephoner} alt="" height="100" width="100" />
                <h1 className="angled-shadow">UGSEL 54</h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/wp-content/uploads/2025/01/tomblaine.pdf"
              className={`hidden ${show3 ? "show2" : ""}`}
            >
              <div className="item three">
                <img src={acces} alt="" height="140" width="150" />
                <h1>PLAN D'ACCES </h1>
              </div>
            </a>

            <a
              href="https://www.grandest.fr/fonctionnement-de-la-region/les-maisons-de-la-region/#flex_image__video"
              rel="noopener noreferrer"
              className={`hidden ${show4 ? "show2" : ""}`}
            >
              <div className="item four">
                <img src={domicile} alt="" height="100" width="100" />
                <h1 className="angled-shadow">MES MAISONS DE LA REGION</h1>
              </div>
            </a>
          </div>
        </div>

        {/*

        <a href="https://immobiliere-des-etudes.fr/marketplace"> 
          <div className="button">
            <button>Trouver mon bien</button>
          </div>
        </a>  */}
      </section>

      <div className="outerbox1"></div>
      <div className="outerbox2"></div>
      <img
        width="615"
        height="200"
        src={GES}
        alt="nothing yet"
        className={`img2 ${img2 ? "goUp" : ""} `}
      />
    </div>
  );
};

export default Main;
