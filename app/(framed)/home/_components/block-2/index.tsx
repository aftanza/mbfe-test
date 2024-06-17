"use client";

import "./styles.scss";
import TujuanUtamaPoint from "./_components/tujuan-utama-point";
import { Text, Title } from "@mantine/core";
import PisaScore from "./_components/pisa-scores";
import { useViewportSize } from "@mantine/hooks";

const point1 = {
    a: [
        <>
            Turut{" "}
            <Text span fw={700} inherit>
                berkontribusi
            </Text>{" "}
            terhadap{" "}
            <Text span fw={700} inherit>
                pemerataan
            </Text>
        </>,
        <>
            <Text span fw={700} inherit>
                pengajaran berkualitas
            </Text>{" "}
            di Indonesia
        </>,
    ],
    b: [
        <>
            Turut{" "}
            <Text span fw={700} inherit>
                berkontribusi
            </Text>{" "}
            terhadap{" "}
        </>,
        <>
            <Text span fw={700} inherit>
                pemerataan pengajaran
            </Text>{" "}
        </>,
        <>
            <Text span fw={700} inherit>
                berkualitas
            </Text>{" "}
            di Indonesia
        </>,
    ],
    c: [
        <>
            Turut{" "}
            <Text span fw={700} inherit>
                berkontribusi
            </Text>{" "}
        </>,
        <>
            terhadap{" "}
            <Text span fw={700} inherit>
                pemerataan
            </Text>{" "}
        </>,
        <>
            <Text span fw={700} inherit>
                pengajaran berkualitas
            </Text>{" "}
        </>,
        <>di Indonesia</>,
    ],
};

const point2 = {
    a: [
        <>
            <Text span fw={700} inherit>
                Mengaplikasikan
            </Text>{" "}
            pengajaran berbasis konseptual{""}
        </>,
        <>di Indonesia</>,
    ],
    b: [
        <>
            <Text span fw={700} inherit>
                Mengaplikasikan
            </Text>{" "}
            pengajaran
        </>,
        <>berbasis konseptual di</>,
        <>Indonesia</>,
    ],
    c: [
        <>
            <Text span fw={700} inherit>
                Mengaplikasikan
            </Text>{" "}
        </>,
        <>pengajaran berbasis </>,
        <>konseptual di </>,
        <>Indonesia</>,
    ],
};

const Block2 = () => {
    const { height: viewHeight, width: viewWidth } = useViewportSize();

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
                        {/* <PointerHighlight text={test} /> */}
                        {/* Hack fix.  */}

                        {viewWidth >= 1372 ? (
                            <>
                                <TujuanUtamaPoint lines={point1.a} />
                                <TujuanUtamaPoint lines={point2.a} />
                            </>
                        ) : (
                            ""
                        )}
                        {viewWidth >= 992 && viewWidth < 1372 ? (
                            <>
                                <TujuanUtamaPoint lines={point1.b} />
                                <TujuanUtamaPoint lines={point2.b} />
                            </>
                        ) : (
                            ""
                        )}
                        {viewWidth >= 700 && viewWidth < 992 ? (
                            <>
                                <TujuanUtamaPoint lines={point1.a} />
                                <TujuanUtamaPoint lines={point2.a} />
                            </>
                        ) : (
                            ""
                        )}
                        {viewWidth >= 576 && viewWidth < 700 ? (
                            <>
                                <TujuanUtamaPoint lines={point1.b} />
                                <TujuanUtamaPoint lines={point2.b} />
                            </>
                        ) : (
                            ""
                        )}
                        {viewWidth >= 501 && viewWidth < 576 ? (
                            <>
                                <TujuanUtamaPoint lines={point1.a} />
                                <TujuanUtamaPoint lines={point2.a} />
                            </>
                        ) : (
                            ""
                        )}
                        {viewWidth >= 380 && viewWidth < 501 ? (
                            <>
                                <TujuanUtamaPoint lines={point1.b} />
                                <TujuanUtamaPoint lines={point2.b} />
                            </>
                        ) : (
                            ""
                        )}
                        {viewWidth >= 320 && viewWidth < 380 ? (
                            <>
                                <TujuanUtamaPoint lines={point1.c} />
                                <TujuanUtamaPoint lines={point2.c} />
                            </>
                        ) : (
                            ""
                        )}
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
