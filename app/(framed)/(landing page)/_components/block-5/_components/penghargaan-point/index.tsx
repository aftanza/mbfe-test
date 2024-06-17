import { Text } from "@mantine/core";

import React from "react";
import { PenghargaanPointProps } from "@/app/_globals/types";
import "./styles.scss";

const PenghargaanPoint = ({ text }: PenghargaanPointProps) => {
    return (
        <div className="penghargaan-point">
            <div className="penghargaan-point__circle-wrapper">
                <div className="penghargaan-point__circle-wrapper__circle" />
            </div>

            <div className="penghargaan-point__lines">
                <div className="penghargaan-point__lines__line">
                    <Text fw={700}>{text}</Text>
                </div>
            </div>
        </div>
    );
};

export default PenghargaanPoint;
