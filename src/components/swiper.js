import React from 'react';
import Swiper from 'react-id-swiper';
import { faTools } from "@fortawesome/free-solid-svg-icons"

import 'swiper/css/swiper.css';
import angelHack from '../images/angel-hack.jpg'
import DianDian from '../images/diandiantou.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
const SimpleSwiper = () => {
    const params = {
    autoplay: {
        delay: 7000,
        disableOnInteraction: false
    },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    }
   
    return(
      <Swiper {...params}>
       <a href="https://diandiantou.now.sh" className="big-content" id="contact-link" title="Try it for yourself!" style={{marginTop: `2em`}}>
       <div>
            <div style={{display:`flex`, justifyContent:`center`}}>
                <img src={DianDian} style={{width: `11.5em`}}></img>
            </div>
            <div style={{textAlign:`center`, padding:`2vh 0`}}>
                <h3>DianDiantou</h3>
                <h3>（点点投）</h3>
                <p className="swiper-text">Utilising the principles of JAMstack, the platform leverages cloud computing and APIs to provide stock portoflio management and built-in quantitative tools to Chinese outbound investors. Backend since deprecated due to costly backend outsourcing 😢 </p>
            </div>
        </div>
       </a>
        
       
        <div>
            <div style={{display:`flex`, justifyContent:`center`}}>
                <img src={angelHack} className="bigger-content" alt="slide 2" className="img-responsive" style={{ marginTop: `2em`}}></img>
            </div>
            
            <div style={{textAlign:`center`, padding:`0 0`}}>
                <h3>AngelHack 2018</h3>
                <p className="swiper-text">Our product, Nurture, sought to provide a virtual pregnancy companion, using machine learning to curate advice on vitamin and food habits. Unfortunately failed to secure funding, but finished fourth overall that weekend.</p>
            </div>
        </div>
        <div>
            <div style={{display:`flex`, justifyContent:`center`, marginTop:`8vh`}}>
                <FontAwesomeIcon icon={faTools} size="8x"></FontAwesomeIcon>
            </div>
            <div style={{textAlign:`center`, padding:`2vh 0`}}>
                <h3>Under construction</h3>
                <p>More to come... </p>
                <p>Reach out to me to learn more!</p>
            </div>    
        </div>
        
      </Swiper>
    )
  }
 
export default SimpleSwiper;