import { Title } from "@mantine/core";
import "./styles.scss";
import { MbStatsType } from "@/app/_globals/types";
import MbStats from "./_components/mb-stats";
import Image from "next/image";
import Provinsi from "./_components/provinsi";

const mbStats: MbStatsType[] = [
    {
        title: "200+",
        description: "Kelas",
    },
    {
        title: "1000+",
        description: "Siswa",
    },
    {
        title: "5",
        description: "Partner Komunitas",
    },
    {
        title: "50",
        description: "Kota Asal",
    },
];

const provinsi: string[] = [
    "Aceh",
    "Sumatera Utara",
    "Riau",
    "Padang",
    "Jambi",
    "Bengkulu",
    "Palembang",
    "Bangka Belitung",
    "Lampung",
    "Banten",
    "DKI Jakarta",
    "Jawa Barat",
    "Jawa Tengah",
    "DI Yogyakarta",
    "Jawa Timur",
    "Bali",
    "Pontianak",
    "Sulawesi Selatan",
    "Kendari",
    "Wakatobi",
    "Gorontalo",
    "Sulawesi Utara",
    "Maluku",
    "Papua Barat",
];

const Block4 = () => {
    return (
        <div className="block-4">
            <Image
                src={"/homepage/block-4/bg.svg"}
                alt="School visit pic"
                // width={1320}
                // height={479}
                fill
                // objectFit={"contain"}
            />
            <div className="block-4__title-container">
                <Image
                    src={"/mb-logo.png"}
                    width={216}
                    height={40}
                    alt={"mb-logo"}
                    // className="block-1__text__inline-logo"
                />
                <Title className="block-4__title-container__title">
                    dalam angka
                </Title>
            </div>
            <div className="block-4__stats">
                {mbStats.map((stats, index) => {
                    return <MbStats stats={stats} key={index} />;
                })}
            </div>
            <div className="block-4__map">
                <Image
                    src={"/homepage/block-4/peta.png"}
                    alt="School visit pic"
                    width={1320}
                    height={479}
                    // fill
                    // objectFit={"contain"}
                />
            </div>
            <div className="block-4__provinsi">
                <Provinsi provinsi={provinsi} />
            </div>
        </div>
    );
};

export default Block4;
