import { Text, Title } from "@mantine/core";
import PenghargaanPoint from "./_components/penghargaan-point";
import "./styles.scss";
import Image from "next/image";

const Block5 = () => {
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
                    <PenghargaanPoint text={"The Kyoto Shinkin Bank Prize"} />
                    <PenghargaanPoint
                        text={"Kyoto Wisdom Industry Creation Center Prize"}
                    />
                </div>
            </div>
            <div className="block-5__image">
                <div className="block-5__image__container">
                    <Image
                        src={"/homepage/block-5/prize-1.png"}
                        alt="Kyoto Shinkin Bank Prize"
                        width={2667}
                        height={1500}
                    />
                </div>
                <div className="block-5__image__container">
                    <Image
                        src={"/homepage/block-5/prize-2.png"}
                        alt="Kyoto Wisdom Industry Creation Center Prize"
                        width={2667}
                        height={1500}
                    />
                </div>
            </div>
        </div>
    );
};

export default Block5;
