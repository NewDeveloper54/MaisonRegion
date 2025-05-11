import React, { useState, useEffect } from "react";
import "./Main.css";
import mp44 from "../assets/mp44.png";
import GES from "../assets/GES.svg";
import acces from "../assets/acces2.png";
import telephoner from "../assets/appel.png";
import domicile from "../assets/house.png";
import stockk from "../assets/stock.jpg";
import {Link} from "react-router-dom";
import running from "../assets/running.jpg";
import aviron from "../assets/aviron.jpg";
import badminton from "../assets/badminton.jpg";
import basket from "../assets/basket.jpg";
import kayak from "../assets/kayak.jpg";
import orientation from "../assets/orientation.jpg";
import cress from "../assets/cress.png";
import cros from "../assets/cros.png"
import cyclisme from "../assets/cyclisme.jpg";
import equitation from "../assets/equitation.jpg";
import epgv from "../assets/epgv.png";
import escrime2 from "../assets/escrime2.jpg";
import fnmnsBg from "../assets/fnmnsBg.png";
import golf from "../assets/golf.jpg";
import gymnastique from "../assets/gymnastique.jpg";
import handball from "../assets/handball.jpg";
import handiSport from "../assets/handiSport.png";
import judo from "../assets/judo.jpg";
import mouvementBG from "../assets/mouvementBG-removebg-preview.png";
import motocyclisme from "../assets/moto.jpg";
import natation from "../assets/nage.jpg";
import paralympique from "../assets/newlogo.svg";
import petanque from "../assets/boule.jpg";
import randBG from "../assets/randBG.png";
import rand from "../assets/logoRandne.png";
import rugby from "../assets/rugby.jpg";
import grottes from "../assets/grottes.png";
import adapteBG from "../assets/adapteBG.png";
import automobiles from "../assets/automobiles.png";
import tous from "../assets/tous.svg";
import taekwondo from "../assets/taekwondo.png";
import tennis from "../assets/tennis.jpg";
import TB from "../assets/TB.png";
import triathlon from "../assets/triathlon.png";
import unss from "../assets/unss.png";
import volleyBall from "../assets/volleyBall.png";
import ugsel from "../assets/ugselBG.png";


const Main = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const [sectionTwoShowed, setSectionTwoShowed] = useState(false);
  const [NotaireShow, setNotaireShow] = useState(false);
  const [img2, setImg2] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);





{/* 
    const cardTab = [
      { title: "REGION GRAND EST", link: "/Info", imgSrc:stockk, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "ASPTT COMITE REGIONAL GRAND EST", link: "/Info", imgSrc:stockk, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow" },
      { title: "ATHLETISME LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:running, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "AVIRON LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:aviron, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "BADMINTON LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:badminton, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "BASKET LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:basket, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "CANOE KAYAK COMITE REGIONAL GRAND EST", link: "/Info", imgSrc:kayak, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "COURSE D'ORIENTATION LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:orientation, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "CRESS GRAND EST", link: "/Info", imgSrc:cress, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "CROS GRAND EST", link: "/Info", imgSrc:cros, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "CYCLISME COMITE REGIONAL GRAND EST", link: "/Info", imgSrc:cyclisme, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "EQUITATION COMITE REGIONAL GRAND EST", link: "/Info", imgSrc:equitation, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "EPGV COMITE REGIONAL GRAND EST", link: "/Info", imgSrc:epgv, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "EPGV COMITE DEPARTEMENTAL MEURTHE ET MOSELLE", link: "/Info", imgSrc:epgv, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "ESCRIME LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:escrime2, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "FNMNS", link: "/Info", imgSrc:fnmnsBg, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "FNMNS CNF", link: "/Info", imgSrc:fnmnsBg, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "GOLF LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:golf, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "GYMNASTIQUE COMITE REGIONAL GRAND EST", link: "/Info", imgSrc:gymnastique, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "HANDBALL LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:handball, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "HANDBALL COMITE DEPARTEMENTAL MEURTHE ET MOSELLE", link: "/Info", imgSrc:handball, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "HANDISPORT COMITE REGIONAL GRAND EST", link: "/Info", imgSrc:handiSport, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "HANDISPORT COMITE DEPARTEMENTAL MEURTHE ET MOSELLE", link: "/Info", imgSrc:handiSport, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "JUDO LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:judo, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "JUDO COMITE DEPARTEMENTAL MEURTHE ET MOSELLE", link: "/Info", imgSrc:judo, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "LORRAINE MOUVEMENT ASSOCIATIF", link: "/Info", imgSrc:mouvementBG, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "MOTOCYCLISME LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:motocyclisme, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "NATATION LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:natation, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "COMITE PARALYMPIQUE ET SPORTIF Français", link: "/Info", imgSrc:paralympique, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "PETANQUE COMITE DEPARTEMENTAL MEURTHE ET MOSELLE", link: "/Info", imgSrc:petanque, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "RANDONNEE PEDESTRE COMITE REGIONAL GRAND EST", link: "/Info", imgSrc:rand, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "RANDONNEE PEDESTRE COMITE DEPARTEMENTAL MEURTHE ET MOSELLE", link: "/Info", imgSrc:randBG, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "RUGBY LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:rugby, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "SPELEOLOGIE LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:grottes, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "SPORT ADAPTE LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:adapteBG, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "SPORT AUTOMOBILE LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:automobiles, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "SPORT POUR TOUS COMITE REGIONAL GRAND EST", link: "/Info", imgSrc:tous, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "TAEKWONDO LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:taekwondo, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "TENNIS LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:tennis, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "TENNIS DE TABLE LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:TB, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "TRIATHLON LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:triathlon, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "UNSS", link: "/Info", imgSrc:unss, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "VOLLEY BALL LIGUE REGIONALE GRAND EST", link: "/Info", imgSrc:volleyBall, linkClass: `hidden ${show2 ? "show2" : ""}`
, divClass: "card", h1Class:"angled-shadow"},
      { title: "UGSEL 54", link: "/Info", imgSrc:ugsel,linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class:"angled-shadow"},
    ];
*/}




    const cardTab = [
      { title: "REGION GRAND EST", link: "/Info/0", imgSrc: stockk, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "ASPTT COMITE REGIONAL GRAND EST", link: "/Info/1", imgSrc: stockk, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "ATHLETISME LIGUE REGIONALE GRAND EST", link: "/Info/2", imgSrc: running, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "AVIRON LIGUE REGIONALE GRAND EST", link: "/Info/3", imgSrc: aviron, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "BADMINTON LIGUE REGIONALE GRAND EST", link: "/Info/4", imgSrc: badminton, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "BASKET LIGUE REGIONALE GRAND EST", link: "/Info/5", imgSrc: basket, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "CANOE KAYAK COMITE REGIONAL GRAND EST", link: "/Info/6", imgSrc: kayak, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "COURSE D'ORIENTATION LIGUE REGIONALE GRAND EST", link: "/Info/7", imgSrc: orientation, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "CRESS GRAND EST", link: "/Info/8", imgSrc: cress, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "CROS GRAND EST", link: "/Info/9", imgSrc: cros, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "CYCLISME COMITE REGIONAL GRAND EST", link: "/Info/10", imgSrc: cyclisme, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "EQUITATION COMITE REGIONAL GRAND EST", link: "/Info/11", imgSrc: equitation, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "EPGV COMITE REGIONAL GRAND EST", link: "/Info/12", imgSrc: epgv, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "EPGV COMITE DEPARTEMENTAL MEURTHE ET MOSELLE", link: "/Info/13", imgSrc: epgv, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "ESCRIME LIGUE REGIONALE GRAND EST", link: "/Info/14", imgSrc: escrime2, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "FNMNS", link: "/Info/15", imgSrc: fnmnsBg, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "FNMNS CNF", link: "/Info/16", imgSrc: fnmnsBg, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "GOLF LIGUE REGIONALE GRAND EST", link: "/Info/17", imgSrc: golf, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "GYMNASTIQUE COMITE REGIONAL GRAND EST", link: "/Info/18", imgSrc: gymnastique, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "HANDBALL LIGUE REGIONALE GRAND EST", link: "/Info/19", imgSrc: handball, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "HANDBALL COMITE DEPARTEMENTAL MEURTHE ET MOSELLE", link: "/Info/20", imgSrc: handball, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "HANDISPORT COMITE REGIONAL GRAND EST", link: "/Info/21", imgSrc: handiSport, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "HANDISPORT COMITE DEPARTEMENTAL MEURTHE ET MOSELLE", link: "/Info/22", imgSrc: handiSport, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "JUDO LIGUE REGIONALE GRAND EST", link: "/Info/23", imgSrc: judo, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "JUDO COMITE DEPARTEMENTAL MEURTHE ET MOSELLE", link: "/Info/24", imgSrc: judo, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "LORRAINE MOUVEMENT ASSOCIATIF", link: "/Info/25", imgSrc: mouvementBG, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "MOTOCYCLISME LIGUE REGIONALE GRAND EST", link: "/Info/26", imgSrc: motocyclisme, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "NATATION LIGUE REGIONALE GRAND EST", link: "/Info/27", imgSrc: natation, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "COMITE PARALYMPIQUE ET SPORTIF Français", link: "/Info/28", imgSrc: paralympique, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "PETANQUE COMITE DEPARTEMENTAL MEURTHE ET MOSELLE", link: "/Info/29", imgSrc: petanque, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "RANDONNEE PEDESTRE COMITE REGIONAL GRAND EST", link: "/Info/30", imgSrc: rand, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "RANDONNEE PEDESTRE COMITE DEPARTEMENTAL MEURTHE ET MOSELLE", link: "/Info/31", imgSrc: randBG, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "RUGBY LIGUE REGIONALE GRAND EST", link: "/Info/32", imgSrc: rugby, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "SPELEOLOGIE LIGUE REGIONALE GRAND EST", link: "/Info/33", imgSrc: grottes, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "SPORT ADAPTE LIGUE REGIONALE GRAND EST", link: "/Info/34", imgSrc: adapteBG, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "SPORT AUTOMOBILE LIGUE REGIONALE GRAND EST", link: "/Info/35", imgSrc: automobiles, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "SPORT POUR TOUS COMITE REGIONAL GRAND EST", link: "/Info/36", imgSrc: tous, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "TAEKWONDO LIGUE REGIONALE GRAND EST", link: "/Info/37", imgSrc: taekwondo, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "TENNIS LIGUE REGIONALE GRAND EST", link: "/Info/38", imgSrc: tennis, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "TENNIS DE TABLE LIGUE REGIONALE GRAND EST", link: "/Info/39", imgSrc: TB, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "TRIATHLON LIGUE REGIONALE GRAND EST", link: "/Info/40", imgSrc: triathlon, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "UNSS", link: "/Info/41", imgSrc: unss, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "VOLLEY BALL LIGUE REGIONALE GRAND EST", link: "/Info/42", imgSrc: volleyBall, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" },
      { title: "UGSEL 54", link: "/Info/43", imgSrc: ugsel, linkClass: `hidden ${show2 ? "show2" : ""}`, divClass: "card", h1Class: "angled-shadow" }
    ];



    const [inputSearch, setInputSearch] = useState("");

    

    const filteredCard = cardTab.filter(item => 
      item.title.toLowerCase().replace(/\s/g, '').includes(inputSearch.toLowerCase().replace(/\s/g, ''))
    );
    

    
    
    





 

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
            <div className="group">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>

              <input

                id="query"
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
                className="input"
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



          {filteredCard.map(item => (
  <Link className={item.linkClass} key={item.title}  to={item.link}>
    <div className={item.divClass}>
      <img src={item.imgSrc} alt="nothing yet" />
      <h1 className={item.h1Class}>{item.title}</h1>
    </div>
  </Link>
))}


{/*
          <Link className={`hidden ${show2 ? "show2" : ""}`} to="/Info">
          <div className="card">
                <img src={stockk} alt="" />
                <h1 className="angled-shadow">REGION GRAND EST</h1>
              </div>
              </Info>    */}


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
