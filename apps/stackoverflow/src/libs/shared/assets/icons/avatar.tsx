// Do not modify this file, it was generated by scripts/gen-asset-components.ts

/* eslint-disable jsx-a11y/alt-text */

import { mp } from "@/shared";
import Image, { ImageProps } from "next/image";
import React from "react";

export const ImageAvatar: React.FC<Omit<ImageProps, "src">> = (props) => {
  return mp(props, <Image src={"/assets/icons/avatar.svg"} {...props} />);
};

export const imageAvatarSrc = "/assets/icons/avatar.svg";
