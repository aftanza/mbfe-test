"use client";

import { Text } from "@mantine/core";

import "./styles.scss";

const TujuanUtamaPoint2 = () => {
    return (
        <div className="tujuan-point-1">
            <div className="tujuan-point-1__circle-wrapper">
                <div className="tujuan-point-1__circle-wrapper__circle" />
            </div>
            <div className="tujuan-point-1__lines">
                <div className="tujuan-point-1__lines__line">
                    <Text
                        className="tujuan-point-1__lines__line__text"
                        c={"white"}
                    >
                        <Text span fw={700} inherit>
                            Mengaplikasikan
                        </Text>{" "}
                        pengajaran berbasis konseptual
                    </Text>
                </div>
                <div className="tujuan-point-1__lines__line">
                    <Text
                        className="tujuan-point-1__lines__line__text"
                        c={"white"}
                    >
                        di Indonesia
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default TujuanUtamaPoint2;
