"use client";

import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import "./styles.scss";

import screenWidths from "@/app/styles/export.module.scss";
// const { screenSmall } = foo;

const test = ["1", "2", "3", "4", "5", "6", "7"];

const Block7 = () => {
    return (
        <div className="block-7">
            <div className="block-7__decor"></div>
            <div className="block-7__title">
                asdasdsdfsdfsdfsdfsdfsdfsdsdfgsddfghfghfg
            </div>
            <Carousel
                withIndicators
                slideSize={{ base: "100%", sm: "50%", md: "25%", lg: "20%" }}
                loop
                align="center"
                slidesToScroll={1}
            >
                {test.map((item, index) => {
                    return (
                        <Carousel.Slide key={index}>
                            <div className={"block-7__slide-container"}>
                                <div
                                    className={"block-7__slide-container__item"}
                                >
                                    {screenWidths.screenMedium}
                                </div>
                            </div>
                        </Carousel.Slide>
                    );
                })}
                {/* <Carousel.Slide>
                    <Image
                        src={"/homepage/block-5/prize-1.png"}
                        alt="centre"
                        fill
                        objectFit="contain"
                    />
                </Carousel.Slide>
                <Carousel.Slide>2</Carousel.Slide> */}
            </Carousel>
        </div>
    );
};

export default Block7;
