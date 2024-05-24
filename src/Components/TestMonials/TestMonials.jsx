// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from '../TestMonialsDetails/TestMonialsDetails';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from '../Assets/user2.png'
import './TestMonials.css'

const TestiMonials = () => {
  
    const testiMonials = [
        {
            name: 'SparkleSoul78',
            description: ' Od impresivnih pejzaža do izvanrednih portreta, ova galerija nudi širok spektar fotografija koje oživljavaju emocije i inspiriraju maštu.',
            address: 'BIH',
            img: 'https://ibb.co/Hn5B02q'
            
        },
        {
            name: 'MysticWanderer42',
            description: 'Sa svojom eklektičnom kolekcijom umjetničkih djela, pruža posjetiteljima jedinstveno iskustvo koje potiče na razmišljanje i duboku emocionalnu povezanost',
            address: 'USA',
            img: 'https://ibb.co/Hn5B02q'
        },
        {
            name: 'ArtisticDreamer89',
            description: 'Ova galerija slika odiše virtuoznošću u svakom kadru. Svaka slika je pažljivo komponirana i prikazuje izvanredan talenat umjetnika.',
            address: 'SRB',
            img: 'https://ibb.co/Hn5B02q'
        },
        {
            name: 'LunaBlue27',
            description: 'Posjet ovoj galeriji slika je istinska inspiracija na svakom koraku.',
            address: 'HRV',
            img: 'https://ibb.co/Hn5B02q'
            
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5">
                <h4 className="miniTitle text-center">Recenzije</h4>
                <div className="text-center ">
                    <h3 className="sectionTitle">Šta drugi kažu o nama?</h3>
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            <img class="img-circle" alt="" src={userPic} />

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div class="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div>
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;