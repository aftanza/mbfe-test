"use client";

import { Text } from "@mantine/core";

import "./styles.scss";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { TujuanUtamaPointProps } from "@/app/_globals/types";
import { useMeasure } from "@uidotdev/usehooks";

type asdad = {
    text: React.ReactNode;
    containerRef?: HTMLDivElement;
    containerWidth?: number | null;
};

const splitIntoLines = (
    words: string[],
    width: number,
    containerRef: HTMLDivElement
) => {
    const lines: string[] = [];
    let currentLine: string = "";

    const getLineWidth = (text: string, font: string): number => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        if (context) {
            context.font = font;
            return context.measureText(text).width;
        }
        return 0;
    };

    const computedStyle = window.getComputedStyle(containerRef);
    const font = `${computedStyle.fontSize} ${computedStyle.fontFamily}`;

    words.forEach((word, index) => {
        const testLine = currentLine + word + " ";
        const testWidth = getLineWidth(testLine, font);

        if (testWidth > width - 20) {
            lines.push(currentLine.trim());
            currentLine = word + " ";
        } else {
            currentLine = testLine;
        }

        if (index === words.length - 1) {
            lines.push(currentLine.trim());
        }
    });

    return lines;
};

const PointerHighlight = ({ text }: asdad) => {
    // const [lines, setLines] = useState<React.ReactNode[]>([]);
    const [lines, setLines] = useState<string[]>([]);
    const [measureRef, { width }] = useMeasure();
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const [idk, textString] = extractTextFromElements(text);
        const newLines = splitIntoLines(
            textString,
            width as number,
            containerRef.current as HTMLDivElement
        );
        setLines(newLines);
        // console.log(idk);
        // console.log(newLines);
    }, [text, width]);
    return (
        <>
            <div className="tujuan-point" ref={measureRef}>
                <div className="tujuan-point__circle-wrapper">
                    <div className="tujuan-point__circle-wrapper__circle" />
                </div>
                <div className="tujuan-point__lines" ref={containerRef}>
                    {lines}
                    {/* {lines.map((line, index) => {
                        return (
                            <div
                                className="tujuan-point__lines__line-wrapper"
                                key={index}
                            >
                                <div className="tujuan-point__lines__line">
                                    <Text c={"white"}>{line}</Text>
                                </div>
                            </div>
                        );
                    })} */}
                </div>
            </div>
        </>
    );
};

const extractAlgo = (elements: React.ReactNode[]): React.ReactNode[] => {
    //Recursively get all child elements
    return elements.flatMap((element) => {
        if (React.isValidElement(element)) {
            if (typeof element.props.children === "string") {
                return element;
            }
            return extractAlgo(React.Children.toArray(element.props.children));
        } else {
            if (typeof element === "string") {
                if (element === " ") {
                    return "";
                }
                return element;
            }
        }
        return "";
    });
};

const extractTextFromElements = (element: React.ReactNode) => {
    // return extractAlgo([element]);
    const stringsAndReactNode = extractAlgo([element]).filter(
        (word) => word !== ""
    );

    const stringsOnly = stringsAndReactNode.flatMap(
        (thing: ReactNode | string) => {
            if (React.isValidElement(thing)) {
                return thing.props.children.split(" ");
            } else if (typeof thing === "string") {
                return thing.split(" ");
            }
        }
    );

    return [stringsAndReactNode, stringsOnly];
};
export default PointerHighlight;
