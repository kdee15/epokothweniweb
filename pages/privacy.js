import React from "react";
const { BASE_URL } = require("../helpers/config");
import { fetchQuery } from "../helpers/utils";
import Layout from "../components/Layout";
import PageHero from "../components/blocks/PageHero/PageHero";
import RichTextComponent from "../components/blocks/RichTextComponent/RichTextComponent";
import classes from "../pages/ContentPage.module.scss";

export default function PodcastList({ Pages }) {
  const headerBlock = Pages[1].blocks[0];
  const richTextBlock = Pages[1].blocks[1];
  return (
    <Layout title="Privacy" description="Content Page">
      <div className={classes.oContentPage}>
        {/*PAGE HERO BLOCK*/}
        <PageHero contentModule={headerBlock}></PageHero>
        {/*END: PAGE HERO BLOCK*/}
        {/*PAGE RICH TEXT COMPONENT*/}
        <RichTextComponent contentModule={richTextBlock}></RichTextComponent>
        {/*END: PAGE RICH TEXT COMPONENT*/}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const Pages = await fetchQuery("Pages");
  return {
    props: {
      Pages,
    },
  };
}
