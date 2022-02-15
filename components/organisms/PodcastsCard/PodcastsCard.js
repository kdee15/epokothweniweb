import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { baseUrl } from "../../../helpers/utils";
import classes from "./PodcastsCard.module.scss";

export function PodcastsCard({ Podcast }) {
  return (
    <div className={classes.oPodcastCard} key={Podcast.Title}>
      <figure
        className={classes.mCardImage}
        style={{ backgroundImage: `url(${baseUrl}${Podcast.cover_image.url})` }}
      >
        <span></span>
      </figure>
      <div className={classes.mCardBody}>
        <div className={classes.mContentWrapper}>
          <h4 className={classes.aTitle}>{Podcast.Title}</h4>
          <ReactMarkdown className={`${classes.mText} a-fnt-16s`}>
            {Podcast.short_description}
          </ReactMarkdown>
        </div>
        <div className={classes.mCtaRegion}>
          <Link href={`${Podcast.URL}`}>
            <a
              className={`${classes.mTextIconLink} a-fnt-16s`}
              target={`_blank`}
              rel="noopener"
            >
              <svg
                className={classes.aLinkIcon}
                preserveAspectRatio="xMidYMid"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                role="presentation"
                aria-hidden="true"
              >
                <path
                  id="aFill"
                  className="st0"
                  d="M39.3,22.2c-7.8-4.6-20.7-5.1-28.2-2.8c-1.2,0.4-2.5-0.3-2.8-1.5c-0.4-1.2,0.3-2.5,1.5-2.8
	c8.6-2.6,22.8-2.1,31.8,3.2c1.1,0.6,1.4,2,0.8,3.1C41.8,22.5,40.4,22.9,39.3,22.2z M39.1,29.1c-0.5,0.9-1.7,1.2-2.6,0.6
	c-6.5-4-16.4-5.2-24.2-2.8c-1,0.3-2.1-0.3-2.4-1.3c-0.3-1,0.3-2.1,1.3-2.4c8.8-2.7,19.7-1.4,27.2,3.2C39.3,27.1,39.6,28.2,39.1,29.1
	z M36.1,35.7c-0.4,0.7-1.4,0.9-2.1,0.5c-5.7-3.5-12.9-4.3-21.3-2.3c-0.8,0.2-1.6-0.3-1.8-1.1c-0.2-0.8,0.3-1.6,1.1-1.8
	c9.2-2.1,17.2-1.2,23.5,2.7C36.3,34.1,36.6,35,36.1,35.7z M25,0.8C11.6,0.8,0.8,11.6,0.8,25c0,13.4,10.9,24.2,24.2,24.2
	c13.4,0,24.2-10.9,24.2-24.2C49.2,11.6,38.4,0.8,25,0.8z"
                />
              </svg>
              <span className={classes.aLinkText}>listen now</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
