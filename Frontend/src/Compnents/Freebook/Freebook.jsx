import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../Cards/Cards";
import axios from "axios";

const Freebook = () => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/lbook");
                console.log(res.data);
                const freeBooks = res.data.filter((data) => data.category === "Free");
                setBook(freeBooks);
            } catch (error) {
                console.log(error);
            }
        };
        
        getBook();
    }, []);

    var settings = {
        dots: true,
        infinite: true, 
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2, 
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false, 
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true, 
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true, 
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
        ],
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-16 px-6 py-10 dark:bg-slate-900 dark:text-white">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Free Offered Courses
                </h1>
                <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Explore our selection of free courses designed to help you upskill at no cost.
                    Learn valuable skills from industry experts.
                </p>
            </div>

            <div className="px-2 md:px-0">
                {book.length > 0 ? (
                    <Slider {...settings}>
                        {book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                ) : (
                    <p className="text-center">No free books available</p>
                )}
            </div>
        </div>
    );
};

export default Freebook;