import React from "react";
import Banner from "../../components/Banner";
import Faq from "../../components/Faq";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Testimonial from "../../components/Testimonial";
import WhyUs from "../../components/WhyUs";

function LandingPage() {
    return (
        <div>
            <Hero />
            <Services />
            <WhyUs />
            <Testimonial />
            <Banner />
            <Faq />
        </div>
    )
}

export default LandingPage