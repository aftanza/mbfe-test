import { Title } from "@mantine/core";
import Image from "next/image";
import "./styles.scss";

const Block3 = () => {
    return (
        <div className="block-3">
            <div className="block-3__shapes block-3__shapes-left">
                <Image
                    src={"/homepage/block-3/shapes.svg"}
                    width={400}
                    height={400}
                    alt="shapes"
                />
            </div>

            <div className="block-3__kelas">
                <div className="block-3__kelas__circle">
                    <Image
                        src={"/homepage/block-3/webinar.svg"}
                        width={400}
                        height={400}
                        alt="book"
                    />
                </div>
                <div className="block-3__kelas__text-wrapper">
                    <div className="block-3__kelas__text-wrapper__text">
                        Kelas Open Chat
                    </div>
                </div>
            </div>
            <div className="block-3__title">
                <Title>Program Kami</Title>
            </div>
            <div className="block-3__modul">
                <div className="block-3__modul__text-wrapper">
                    <div className="block-3__modul__text-wrapper__text">
                        Modul Belajar
                    </div>
                </div>
                <div className="block-3__modul__circle">
                    <Image
                        src={"/homepage/block-3/book.svg"}
                        width={400}
                        height={400}
                        alt="book"
                    />
                </div>
            </div>
            <div className="block-3__shapes block-3__shapes-right">
                <Image
                    src={"/homepage/block-3/shapes.svg"}
                    width={400}
                    height={400}
                    alt="shapes"
                />
            </div>
        </div>
    );
};

export default Block3;
