import React from "react";
import './styles.css';
import Group_53 from '../../assets/Group 53.png';
import ImgService from '../../assets/img_service.png'

function Services() {
    const serviceList = [
        "Sewa Mobil Dengan Supir di Bali 12 Jam",
        "Sewa Mobil Lepas Kunci di Bali 24 Jam",
        "Sewa Mobil Jangka Panjang Bulanan",
        "Gratis Antar - Jemput Mobil di Bandara",
        "Layanan Airport Transfer / Drop In Out"
      ];

    const ServiceList = ({ itemService }) => {
        return(
            <div class = "servicelist--container">
                <img src = {Group_53} className = "servicelist--icon" />
                <p class = "servicelist--desc">{itemService}</p>
            </div>
        )
    }

    return (
        <div id='services' class = 'service--container'>
        <img src = {ImgService} class = 'service--img'/>
        <div className='servicelist'>
          <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
          <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
          <li className='servicelist--list'>
          {serviceList.map((itemService => (
                <ServiceList itemService={itemService}/>
            )
            ))
          }
          </li>
        </div>
      </div>
    )
}

export default Services