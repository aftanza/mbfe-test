"use client";
import { Text, Title } from "@mantine/core";
import "./styles.scss";
import { PisaScoreProps } from "@/app/_globals/types";
import { poppins } from "@/app/_globals/fonts";

const PisaScore = ({
    pisaScore,
    pisaTitle,
    pisaOECDAverage,
}: PisaScoreProps) => {
    return (
        <div className="pisa">
            <div className="pisa__box">
                <h1 className={`${poppins.className}`}>{pisaScore}</h1>
            </div>
            <div className="pisa__title">
                <Text>{pisaTitle}</Text>
            </div>
            <div className="pisa__average-desc">
                <Text>rata-rata OECD {pisaOECDAverage}</Text>
            </div>
        </div>
    );
};

export default PisaScore;
