/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Carousel from "react-material-ui-carousel";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./Carousel.module.css";
// import clsx from 'clsx'

export default ({ items }) => {
  const Item = ({ item: { name, description, img } }) => {
    const imgSrc = useBaseUrl(img);
    return (
      <>
        <h2>{name}</h2>
        {description && <p>{description}</p>}
        <a href={imgSrc}>
          <img className={styles.img} src={imgSrc} />
        </a>
      </>
    );
  };
  return (
    <Carousel className={styles.carousel}>
      {items.map((item, i) => (
        <Item key={"item-" + i} item={item} />
      ))}
    </Carousel>
  );
};
