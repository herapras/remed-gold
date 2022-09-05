import React from "react";
import Accordion from "react-bootstrap/Accordion";
import './styles.css'

function Faq() {
    const faqacc = [
        {
          q: "Apa saja syarat yang dibutuhkan?",
          a:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          q: "Berapa hari minimal sewa mobil lepas kunci?",
          a:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          q: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
          a:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          q: "Apakah Ada biaya antar-jemput?",
          a:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
          q: "Bagaimana jika terjadi kecelakaan?",
          a:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
      ];

    return (
        <div>
            <section id="faq" className="faq--section">
                <div className="faq--title">
                <h1>Frequently Asked Question</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="faq-content">
                <Accordion>
                    {faqacc.map((item, index) => {
                    return (
                        <Accordion.Item eventKey={index}>
                        <Accordion.Header>{item.q}</Accordion.Header>
                        <Accordion.Body>{item.a}</Accordion.Body>
                        </Accordion.Item>
                    );
                    })}
                </Accordion>
                </div>
            </section>
        </div>
    )
}

export default Faq