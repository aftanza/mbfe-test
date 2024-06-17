import { MbStatsProps } from "@/app/_globals/types";

import "./styles.scss";
import { Text, Title } from "@mantine/core";
import { poppins } from "@/app/_globals/fonts";

const MbStats = ({ stats }: MbStatsProps) => {
    return (
        <div className="stats">
            <div className="stats__title">
                <h1 className={`${poppins.className}`}>{stats.title}</h1>
            </div>
            <div className={`stats__description`}>
                <div className="stats__description__wrapper">
                    <Text c={"white"} fw={"700"}>
                        {stats.description}
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default MbStats;
