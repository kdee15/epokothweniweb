import React from "react";
import Image from "next/image";
import classes from "../PageHero/PageHero.module.scss";

function PageHero(props) {
  const { contentModule } = props;
  console.log(props);
  return (
    <section
      key={`${contentModule.__component}-${contentModule.id}`}
      className={classes.oPageHeroBlock}
    >
      <div className={classes.oBackgroundBlock}>
        <Image
          className={classes.aImage}
          src={`http://localhost:1337${contentModule.image.url}`}
          alt={``}
          width={contentModule.image.width}
          height={contentModule.image.height}
        />
      </div>
      <div className={classes.oBlockBody}>
        <div className={`container`}>
          <div className={`row`}>
            <h1 className={classes.aTitle}>{contentModule.title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
