import { ProvinsiProps } from "@/app/_globals/types";
import "./styles.scss";
import { Text } from "@mantine/core";

const Provinsi = ({ provinsi }: ProvinsiProps) => {
    let yellow = false;
    return (
        <div className="provinsi-list">
            {provinsi.map((currentProvinsi, index) => {
                yellow = !yellow;
                return (
                    <Text
                        className={`provinsi-list__provinsi ${
                            yellow
                                ? "provinsi-list__provinsi__yellow"
                                : "provinsi-list__provinsi__blue"
                        }`}
                        key={index}
                    >
                        {currentProvinsi}
                    </Text>
                );
            })}
        </div>
    );
};

export default Provinsi;
