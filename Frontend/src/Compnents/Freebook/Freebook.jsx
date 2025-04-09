import React from "react";
import list from "../../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../Cards/Cards";

const Freebook = () => {
    const filterData = list.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: true, 
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2, 
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true, // Pauses autoplay when hovering
        arrows: false, 
        responsive: [
            {
                breakpoint: 1280, // Large screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // Laptops & tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true, 
                },
            },
            {
                breakpoint: 768, // Small tablets & large phones
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true, 
                },
            },
            {
                breakpoint: 480, // Mobile screens
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
            {/* Title & Description */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Free Offered Courses
                </h1>
                <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Explore our selection of free courses designed to help you upskill at no cost.
                    Learn valuable skills from industry experts.
                </p>
            </div>

            {/* Slider */}
            <div className="px-2 md:px-0 ">
                <Slider {...settings}>
                    {filterData.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Freebook;
