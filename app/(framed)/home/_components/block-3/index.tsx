"use client";

import { Title } from "@mantine/core";
import Image from "next/image";
import "./styles.scss";
import { useViewportSize } from "@mantine/hooks";
import Link from "next/link";

const Block3 = () => {
    const { height: viewHeight, width: viewWidth } = useViewportSize();
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
                    <div className="block-3__kelas__text-wrapper__text block-3__button">
                        <Link
                            href={{
                                pathname: `/kelas-gratis`,
                            }}
                        >
                            Kelas Open Chat
                        </Link>
                    </div>
                </div>
            </div>

            <div className="block-3__title">
                <Title>Program Kami</Title>
            </div>

            <div className="block-3__modul">
                <div className="block-3__modul__text-wrapper">
                    <div className="block-3__modul__text-wrapper__text block-3__button">
                        <Link
                            href={{
                                pathname: `/modul-belajar`,
                            }}
                        >
                            Modul Belajar
                        </Link>
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
