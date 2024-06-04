import { ProvinsiProps } from "@/app/_globals/types";
import styles from "./provinsi.module.scss";
import { Text } from "@mantine/core";

const Provinsi = ({ provinsi }: ProvinsiProps) => {
    let yellow = false;
    return (
        <div className={styles.provinsiList}>
            {provinsi.map((currentProvinsi, index) => {
                yellow = !yellow;
                return (
                    <Text
                        className={`${styles.provinsi} ${
                            yellow ? styles.yellow : styles.blue
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
