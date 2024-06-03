import "./styles.scss";
import TujuanUtamaPoint from "./_components/tujuan-utama-point";
import { Text, Title } from "@mantine/core";
import PisaScore from "./_components/pisa-scores";

const Block2 = () => {
    const point1_line1 = (
        <>
            Turut{" "}
            <Text span fw={700} inherit>
                berkontribusi
            </Text>{" "}
            terhadap{" "}
            <Text span fw={700} inherit>
                pemerataan
            </Text>
        </>
    );
    const point1_line2 = (
        <>
            <Text span fw={700} inherit>
                pengajaran berkualitas
            </Text>{" "}
            di Indonesia
        </>
    );

    const point2_line1 = (
        <>
            <Text span fw={700} inherit>
                Mengaplikasikan
            </Text>{" "}
            pengajaran berbasis konseptual{""}
        </>
    );
    const point2_line2 = <>di Indonesia</>;

    const firstPoint = [point1_line1, point1_line2];
    const secondPoint = [point2_line1, point2_line2];

    return (
        <div className="block-2">
            <div className="block-2__left">
                <div className="block-2__left__wrapper">
                    <div className="block-2__left__wrapper__text">
                        <Text>
                            Semua berawal dari{" "}
                            <Text span fw={700} inherit>
                                mengapa,
                            </Text>{" "}
                        </Text>
                        <Title>Mengapa Kami hadir?</Title>
                        <Text>Tujuan utama dari kegiatan mejabelajar:</Text>
                    </div>

                    <div className="block-2__left__wrapper__tujuan">
                        <TujuanUtamaPoint lines={firstPoint} />
                        <TujuanUtamaPoint lines={secondPoint} />
                        {/* <TujuanUtamaPoint2 /> */}
                    </div>
                </div>
            </div>
            <div className="block-2__right">
                <div className="block-2__right__wrapper">
                    <div className="block-2__right__wrapper__text">
                        <Text c={"white"}>
                            Program mejabelajar ini{" "}
                            <Text span fw={700} inherit>
                                diinisiasi
                            </Text>{" "}
                            sebagai{" "}
                            <Text span fw={700} inherit>
                                response
                            </Text>{" "}
                            terhadap performa Indonesia pada tes PISA 2018 yang{" "}
                            <Text span fw={700} inherit>
                                jauh di bawah rata-rata OECD
                            </Text>{" "}
                            , yaitu pada{" "}
                            <Text span fw={700} inherit>
                                peringkat 7 terbawah
                            </Text>
                            .
                        </Text>
                    </div>
                    <div className="block-2__right__wrapper__score">
                        <PisaScore
                            pisaScore={371}
                            pisaTitle="literasi membaca"
                            pisaOECDAverage={487}
                        />
                        <PisaScore
                            pisaScore={379}
                            pisaTitle="matematika"
                            pisaOECDAverage={489}
                        />
                        <PisaScore
                            pisaScore={396}
                            pisaTitle="sains"
                            pisaOECDAverage={489}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block2;
