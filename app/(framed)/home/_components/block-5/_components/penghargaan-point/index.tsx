import { Text } from "@mantine/core";

import React from "react";
import { PenghargaanPointProps } from "@/app/_globals/types";
import "./styles.scss";

const PenghargaanPoint = ({ lines }: PenghargaanPointProps) => {
    return (
        <div className="penghargaan-point">
            <div className="penghargaan-point__circle-wrapper">
                <div className="penghargaan-point__circle-wrapper__circle" />
            </div>

            <div className="penghargaan-point__lines">
                {lines.map((line, index) => {
                    return (
                        <div
                            className="penghargaan-point__lines__line-wrapper"
                            key={index}
                        >
                            <div className="penghargaan-point__lines__line">
                                <Text fw={700}>{line}</Text>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PenghargaanPoint;
