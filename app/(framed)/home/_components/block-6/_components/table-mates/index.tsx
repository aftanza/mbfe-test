import { Text } from "@mantine/core";
import { TableMatesProps } from "@/app/_globals/types";
import "./styles.scss";
import { poppins } from "@/app/_globals/fonts";

const TableMates = ({ data }: TableMatesProps) => {
    const { title, name, extra, body } = data;
    return (
        <div className="table-mates">
            <div className="table-mates__header">
                <div
                    className={`table-mates__header__title ${poppins.className}`}
                >
                    <Text c={"#F57600"} fw={700}>
                        {title}
                    </Text>
                </div>
                <div
                    className={`table-mates__header__name ${poppins.className}`}
                >
                    <Text fw={700} c={"white"}>
                        {name}
                    </Text>
                </div>
                <div
                    className={`table-mates__header__extra ${poppins.className}`}
                >
                    <Text fw={700}>{extra}</Text>
                </div>
            </div>

            <div className="table-mates__body">
                <Text fw={500} c={"white"}>
                    {body}
                </Text>
            </div>
        </div>
    );
};

export default TableMates;
