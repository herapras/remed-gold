import React, {Component} from "react";
import './styles.css';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import PhotoProfile from '../../assets/img_photo-1.png'
import Rating from '../../assets/Rate.png'

export default class Testimonial extends Component {
    render() {
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 2,
        speed: 500,
        dots: true,
      };
      return (
        <div id='testimonial' className='testimonial--container'>
            <div className='testimonial--head' >
                <h2>Testimonial</h2>
                <p>Berbagai review positif dari para pelanggan kami</p>
            </div>
          <Slider {...settings}>
            <div className='testimonial--content'>
              <img src={PhotoProfile} className='photoprofile'/>
              <div className='testimonial--test' >
                <img src={Rating} />
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                <p>John Dee 32, Bromo</p>
              </div>
            </div>
            <div className='testimonial--content'>  
                <img src={PhotoProfile} className='photoprofile'/>
              <div className='testimonial--test' >
                <img src={Rating} />
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                <p>John Dee 32, Bromo</p>
              </div>
            </div>
            <div className='testimonial--content'>
            <img src={PhotoProfile} className='photoprofile'/>
              <div className='testimonial--test' >
                <img src={Rating} />
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                <p>John Dee 32, Bromo</p>
              </div>
            </div>
          </Slider>
        </div>
      );
    }}