import React from 'react';
import Swiper from 'react-id-swiper';
import { faTools } from "@fortawesome/free-solid-svg-icons"

import 'swiper/css/swiper.css';
import angelHack from '../images/angel-hack.jpg'
import DianDian from '../images/diandiantou.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
const SimpleSwiper = () => {
    const params = {
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false
    // },
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
                <img src={DianDian} className="img-responsive" style={{marginTop:`2em`}}></img>
            </div>
            <div style={{textAlign:`center`, padding:`2vh 0`}}>
                <h3>DianDiantou</h3>
                <h3>（点点投）</h3>
                <p className="swiper-text">Built on JAMstack, BaaS, and APIs for data. Provides stock portoflio management and built-in quantitative tools to Chinese outbound investors. BaaS since deprecated. Mobile <strong>UN-</strong>friendly 😢 </p>
            </div>
        </div>
       </a>
        
       
        <div>
            <div style={{display:`flex`, justifyContent:`center`}}>
                <img src={angelHack} className="bigger-content" alt="slide 2" className="img-responsive" style={{ marginTop: `2em`}}></img>
            </div>
            
            <div style={{textAlign:`center`, padding:`2vh 0`}}>
                <h3>AngelHack 2018</h3>
                <p className="swiper-text">We built Nurture, a virtual pregnancy companion, using ML to curate advice on vitamin and food habits. Finished fourth overall that weekend.</p>
            </div>
        </div>
        <div>
            <div style={{marginTop:`8vh`}}>
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