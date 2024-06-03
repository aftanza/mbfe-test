"use client";

import { Text } from "@mantine/core";

import "./styles.scss";
import React from "react";
import { TujuanUtamaPointProps } from "@/app/_globals/types";

const TujuanUtamaPoint = ({ lines }: TujuanUtamaPointProps) => {
    return (
        <div className="tujuan-point">
            <div className="tujuan-point__circle-wrapper">
                <div className="tujuan-point__circle-wrapper__circle" />
            </div>
            <div className="tujuan-point__lines">
                {lines.map((line, index) => {
                    return (
                        <div className="tujuan-point__lines__line" key={index}>
                            <Text
                                className="tujuan-point__lines__line__text"
                                c={"white"}
                            >
                                {line}
                            </Text>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TujuanUtamaPoint;
