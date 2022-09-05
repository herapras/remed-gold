import React from "react";
import './styles.css';
import IconComplete from '../../assets/icon_complete-1.png'
import IconPrice from '../../assets/icon_price-1.png'
import IconTime from '../../assets/icon_24hrs-1.png'
import IconPro from '../../assets/icon_professional-1.png'
import { Card, Col, Row } from "react-bootstrap";

function WhyUs() {
    const data = [
        {
            icon: IconComplete,
            h: 'Mobil Lengkap',
            p: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat'
        },
        {
            icon: IconPrice,
            h: 'Harga Murah',
            p: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain'
        },
        {
            icon: IconTime,
            h: 'Layanan 24 Jam',
            p: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu'
        },
        {
            icon: IconPro,
            h: 'Sopir Profesional',
            p: 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu'
        }
    ]

    const WhyUsList = (props) => {
        const {icon, h, p} = props

        return (
                <Col sm="12" md="6" lg="3">
                    <Card className="WhyUs--card-content">
                    <img src={icon}/>
                    <h1>{h}</h1>
                    <p>{p}</p>
                    </Card>
                </Col>
        )
    }

    return (
        <div id='whyus' className='WhyUs--container'>
            <div className='WhyUs--title'>
                <h2>Why Us?</h2>
                <p>Mengapa harus pilih Binar Car Rental?</p>
            </div>
            <div className='WhyUs--card'>
                <Row>
                {data.map((item) => {
                return (
                    <WhyUsList
                    icon={item.icon}
                    h={item.h}
                    p={item.p}
                    />
                );
                })}
                </Row>
            </div>
        </div>
    )
}

export default WhyUs