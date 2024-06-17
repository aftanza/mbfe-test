"use client";

import { Text, Title } from "@mantine/core";
import PenghargaanPoint from "./_components/penghargaan-point";
import "./styles.scss";
import Image from "next/image";

import { useDisclosure, useViewportSize } from "@mantine/hooks";

import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

import screenWidths from "@/app/styles/export.module.scss";

const Block5 = () => {
    const { height: viewHeight, width: viewWidth } = useViewportSize();

    return (
        <div className="block-5">
            <div className="block-5__text">
                <Title c={"white"}>Penghargaan Open Chat</Title>
                <Text c={"white"}>
                    Program Open Chat mejabelajar menjadi{" "}
                    <Text span fw={700} inherit>
                        pemenang dalam Kyoto International Entrepreneurship
                        Contest for University Students 2022
                    </Text>{" "}
                    dan memperoleh penghargaan dari:
                </Text>
                <div className="block-5__text__point-container">
                    {viewWidth >= parseInt(screenWidths.screenMedium, 10) ? (
                        <PenghargaanPoint
                            lines={["The Kyoto Shinkin Bank Prize"]}
                        />
                    ) : (
                        ""
                    )}

                    {viewWidth >= 1300 ? (
                        <PenghargaanPoint
                            lines={[
                                "Kyoto Wisdom Industry Creation Center Prize",
                            ]}
                        />
                    ) : (
                        ""
                    )}

                    {viewWidth >= parseInt(screenWidths.screenMedium, 10) &&
                    viewWidth < 1300 ? (
                        <PenghargaanPoint
                            lines={[
                                "Kyoto Wisdom Industry",
                                "Creation Center Prize",
                            ]}
                        />
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="block-5__image">
                <div className="block-5__image__container">
                    <Gallery>
                        <Item
                            original="/homepage/block-5/prize-1.png"
                            thumbnail="/homepage/block-5/prize-1.png"
                            width="2667"
                            height="1500"
                        >
                            {({ ref, open }) => (
                                <Image
                                    src={"/homepage/block-5/prize-1.png"}
                                    alt="Kyoto Shinkin Bank Prize"
                                    width={2667}
                                    height={1500}
                                    onClick={open}
                                    ref={ref}
                                />
                            )}
                        </Item>
                    </Gallery>

                    {viewWidth < parseInt(screenWidths.screenMedium, 10) ? (
                        <PenghargaanPoint
                            lines={["The Kyoto Shinkin", "Bank Prize"]}
                        />
                    ) : (
                        ""
                    )}
                </div>
                <div className="block-5__image__container">
                    <Gallery>
                        <Item
                            original="/homepage/block-5/prize-2.png"
                            thumbnail="/homepage/block-5/prize-2.png"
                            width="2667"
                            height="1500"
                        >
                            {({ ref, open }) => (
                                <Image
                                    src={"/homepage/block-5/prize-2.png"}
                                    alt="Kyoto Shinkin Bank Prize"
                                    width={2667}
                                    height={1500}
                                    onClick={open}
                                    ref={ref}
                                />
                            )}
                        </Item>
                    </Gallery>
                    {viewWidth < parseInt(screenWidths.screenMedium, 10) ? (
                        <PenghargaanPoint
                            lines={[
                                "Kyoto Wisdom Industry",
                                "Creation Center Prize",
                            ]}
                        />
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default Block5;
