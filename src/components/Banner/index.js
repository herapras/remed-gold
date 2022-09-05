import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import './styles.css'

function Banner() {
    return (
        <div>
            <section className="banner--section">
                <div className="banner--container">
                <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to="/carlist">
                    <Button variant="success">
                    Mulai Sewa Mobil
                    </Button>
                </Link>
                </div>
            </section>
        </div>
    )
}

export default Banner