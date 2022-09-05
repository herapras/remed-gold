import React from "react";
import './styles.css';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import CarImg from '../../assets/img_car.png'

function Hero() {
    return (
        <div className = 'hero--container'>
            <div className = 'hero--sec hero--word'>
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Link to="/carlist">
                    <Button variant="success">
                    Mulai Sewa Mobil
                    </Button>
                </Link>
            </div>
            <img src ={CarImg} className = 'hero--sec hero--img' width='100%' height='auto'/>
        </div>
    )
}

export default Hero