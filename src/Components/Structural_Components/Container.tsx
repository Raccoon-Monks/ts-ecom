import { NextComponentType } from "next";
import { ReactNodeArray } from "prop-types";
import { DetailedHTMLProps, HTMLAttributes, PropsWithRef, ReactNode } from "react";

export default function Container({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <div>
        {children}
    </div>
    )

}