"use client";

import { Text, Title, rem } from "@mantine/core";
import "./styles.scss";
import Image from "next/image";

const Block1 = () => {
    return (
        <div className="block-1">
            <div className="block-1__text">
                <Title order={1} lh={"2"} c={"white"}>
                    Apa itu (insert logo)
                </Title>
                <Text
                    fw={500}
                    c={"white"}
                    style={{ textAlign: "justify", wordSpacing: rem(5) }}
                >
                    <Text span fw={700} inherit>
                        mejabelajar
                    </Text>{" "}
                    adalah sebuah organisasi{" "}
                    <Text span fw={700} inherit>
                        non-profit
                    </Text>{" "}
                    yang mengadakan kegiatan pembelajaran gratis untuk
                    siswa-siswi marginal sebagai respon terhadap isu kesenjangan
                    pendidikan di Indonesia
                </Text>
            </div>
            <div className="block-1__image">
                <Image
                    src={"/homepage/block-1/school-visit.png"}
                    alt="School visit pic"
                    fill={true}
                    objectFit={"contain"}
                />
            </div>
        </div>
    );
};

export default Block1;
