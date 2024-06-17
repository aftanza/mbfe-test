"use client";

import { Text, Title } from "@mantine/core";
import PenghargaanPoint from "./_components/penghargaan-point";
import "./styles.scss";
import Image from "next/image";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

import testImage from "/public/homepage/block-5/prize-1.png";

import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const Block5 = () => {
    const [modalOpened, { open: modalOpen, close: modalClose }] =
        useDisclosure(false);
    return (
        <div className="block-5">
            {/* <img
                src={"/homepage/block-5/prize-1.png"}
                alt="Kyoto Shinkin Bank Prize"
            /> */}
            {/* <Modal
                opened={modalOpened}
                onClose={modalClose}
                centered
                // fullScreen
                size={"100%"}
                // removeScrollProps={{ allowPinchZoom: true }}
                // withCloseButton={false}
                style={{ zIndex: 1000 }}
                // overlayProps={{
                //     style: { position: "relative" },
                // }}
                withinPortal={true}
                // portalProps={{ style: { position: "relative" } }}
            >
                <div
                    className="tasdhjuigasyuidg"
                    style={{
                        position: "relative",
                        height: "80vh",
                        width: "100%",
                        // overflow: "hidden",
                        // padding: "10em",
                        // margin: "50px 50px",
                    }}
                >
                    <Image
                        src={"/homepage/block-5/prize-1.png"}
                        alt="Kyoto Shinkin Bank Prize"
                        // width={2667}
                        // height={1500}
                        style={{
                            objectFit: "contain",
                            // width: "100%",
                            // height: "500px",
                        }}
                        // objectFit={"cover"}
                        fill
                    />
                </div>
            </Modal> */}
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
                    <PenghargaanPoint text={"The Kyoto Shinkin Bank Prize"} />
                    <PenghargaanPoint
                        text={"Kyoto Wisdom Industry Creation Center Prize"}
                    />
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
                    {/* <Image
                            src={"/homepage/block-5/prize-1.png"}
                            alt="Kyoto Shinkin Bank Prize"
                            width={2667}
                            height={1500}
                            onClick={() => {
                                console.log("asdkolasjd");
                                // modalOpen();
                            }}
                        /> */}
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
                    {/* <Image
                        src={"/homepage/block-5/prize-2.png"}
                        alt="Kyoto Wisdom Industry Creation Center Prize"
                        width={2667}
                        height={1500}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default Block5;
