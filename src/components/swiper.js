import React from 'react';
import Swiper from 'react-id-swiper';
import { faTools } from "@fortawesome/free-solid-svg-icons"

import 'swiper/css/swiper.css';
import angelHack from '../images/angel-hack.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
const SimpleSwiper = () => {
    const params = {
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
       <a href="https://diandiantou.now.sh" className="big-content" id="contact-link" title="Try it for yourself!">
       <div>
            <div style={{display:`flex`, justifyContent:`center`}}>
                <svg  width="250" height="333" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="111.5" cy="43.5" r="12" stroke="#72330E" stroke-width="5"/>
                <circle cx="188.5" cy="41.5" r="12" stroke="#72330E" stroke-width="5"/>
                <path d="M125.837 224.51C116.774 263.773 92.2515 281.832 68.4133 276.33C44.5751 270.827 30.4483 243.848 39.5111 204.585C48.5738 165.322 77.7849 126.951 101.623 132.453C125.461 137.956 134.9 185.248 125.837 224.51Z" fill="#72330E"/>
                <path d="M174.2 224.51C183.262 263.773 207.785 281.832 231.623 276.33C255.461 270.827 269.588 243.848 260.525 204.585C251.463 165.322 222.251 126.951 198.413 132.453C174.575 137.956 165.137 185.248 174.2 224.51Z" fill="#72330E"/>
                <path d="M204 240C204 286.392 181.167 313 153 313C124.833 313 102 286.392 102 240C102 193.608 124.833 143 153 143C181.167 143 204 193.608 204 240Z" fill="#FFF799"/>
                <path d="M141 63C141 65.7614 138.761 68 136 68C133.239 68 131 65.7614 131 63C131 60.2386 133.239 58 136 58C138.761 58 141 60.2386 141 63Z" fill="#C4C4C4"/>
                <path d="M167 63C167 65.7614 164.761 68 162 68C159.239 68 157 65.7614 157 63C157 60.2386 159.239 58 162 58C164.761 58 167 60.2386 167 63Z" fill="#C4C4C4"/>
                <rect x="148" y="61" width="3" height="2" fill="#C4C4C4"/>
                <path d="M158.602 86.1455C155.926 90.9052 149.074 90.9052 146.398 86.1455L142.342 78.9302C139.719 74.264 143.091 68.5 148.444 68.5L156.556 68.5C161.909 68.5 165.281 74.264 162.658 78.9302L158.602 86.1455Z" fill="#C4C4C4"/>
                <path d="M153 81C156.314 81 159 77.4183 159 73H147C147 77.4183 149.686 81 153 81Z" fill="black"/>
                <circle cx="111.5" cy="43.5" r="12" fill="#5DA9E9" stroke="#89C0EF" stroke-width="5"/>
                <circle cx="188.5" cy="41.5" r="12" fill="#5DA9E9" stroke="#89C0EF" stroke-width="5"/>
                <path d="M125.837 224.51C116.774 263.773 92.2515 281.832 68.4133 276.33C44.5751 270.827 30.4483 243.848 39.5111 204.585C48.5738 165.322 77.7849 126.951 101.623 132.453C125.461 137.956 134.9 185.248 125.837 224.51Z" fill="#5DA9E9"/>
                <path d="M174.2 224.51C183.262 263.773 207.785 281.832 231.623 276.33C255.461 270.827 269.588 243.848 260.525 204.585C251.463 165.322 222.251 126.951 198.413 132.453C174.575 137.956 165.137 185.248 174.2 224.51Z" fill="#5DA9E9"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M150 27.0031C150.167 27.001 150.333 27 150.5 27C198.825 27 238 112.961 238 219C238 236.16 236.974 251.039 235.05 263.927C233.749 280.462 229.265 301.067 225.044 320.026C216.457 358.601 196.724 377.429 178.458 373.363C167.304 370.88 159.276 360.433 156.672 343.89C154.633 343.965 152.575 344 150.5 344C150.333 344 150.167 344 150 343.999C149.833 344 149.667 344 149.5 344C147.358 344 145.235 343.963 143.132 343.882C140.624 360.759 132.54 371.42 121.257 373.932C102.991 377.998 83.2588 359.17 74.6711 320.595C70.0471 299.823 65.1067 277.077 64.3833 259.871C62.825 247.943 62 234.388 62 219C62 112.961 101.175 27 149.5 27C149.667 27 149.833 27.001 150 27.0031Z" fill="#89C0EF"/>
                <path d="M201 240C201 286.392 178.167 313 150 313C121.833 313 99 286.392 99 240C99 193.608 121.833 143 150 143C178.167 143 201 193.608 201 240Z" fill="#FAFAFA"/>
                <path d="M145 62C145 64.7614 142.761 67 140 67C137.239 67 135 64.7614 135 62C135 59.2386 137.239 57 140 57C142.761 57 145 59.2386 145 62Z" fill="black"/>
                <path d="M171 62C171 64.7614 168.761 67 166 67C163.239 67 161 64.7614 161 62C161 59.2386 163.239 57 166 57C168.761 57 171 59.2386 171 62Z" fill="black"/>
                <circle cx="164" cy="60" r="2" fill="white"/>
                <path d="M155.602 86.1455C152.926 90.9052 146.074 90.9052 143.398 86.1455L139.342 78.9302C136.719 74.264 140.091 68.5 145.444 68.5L153.556 68.5C158.909 68.5 162.281 74.264 159.658 78.9302L155.602 86.1455Z" fill="#5DA9E9"/>
                <path d="M150 81C153.314 81 156 77.4183 156 73H144C144 77.4183 146.686 81 150 81Z" fill="white"/>
                <circle cx="163.5" cy="62.5" r="10.5" stroke="#FAFAFA" stroke-width="2"/>
                <circle cx="137.5" cy="62.5" r="10.5" stroke="#FAFAFA" stroke-width="2"/>
                <rect x="149" y="61" width="3" height="3" fill="#FAFAFA"/>
                <circle cx="150" cy="283" r="4" fill="#5DA9E9"/>
                <circle cx="138" cy="60" r="2" fill="white"/>
                </svg>
            </div>
            <div style={{textAlign:`center`, padding:`2vh 0`}}>
                <h3>DianDiantou</h3>
                <p>Utilising the principles of JAMstack, the platform leverages cloud computing and APIs to provide stock portoflio management and built-in quantitative tools to Chinese outbound investors</p>
            </div>
        </div>
       </a>
        
       
        <div>
            <div style={{display:`flex`, justifyContent:`center`, height: `100%`}}>
                <img src={angelHack} className="bigger-content" alt="slide 2" className="img-responsive"></img>
            </div>
            
            <div style={{textAlign:`center`, padding:`2vh 0`}}>
                <h3>AngelHack 2018</h3>
                <p>Our product, Nurture, sought to provide a virtual pregnancy companion, using machine learning to curate advice on vitamin and food habits. Unfortunately failed to secure funding, but finished fourth overall that weekend.</p>
            </div>
        </div>
        <div>
            <div style={{display:`flex`, justifyContent:`center`, marginTop:`15vh`}}>
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