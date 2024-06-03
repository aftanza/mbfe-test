"use client";
import { Text, Title } from "@mantine/core";
import "./styles.scss";

type PisaScoreProps = {
    pisaScore: number;
    pisaTitle: string;
    pisaOECDAverage: number;
};
const PisaScore = ({
    pisaScore,
    pisaTitle,
    pisaOECDAverage,
}: PisaScoreProps) => {
    return (
        <div className="pisa">
            <div className="pisa__box">
                <Title>{pisaScore}</Title>
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
