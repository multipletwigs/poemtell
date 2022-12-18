import Poemtell from "@/components/Poemtell";
import { siteMetaData, SiteMetaData } from "@/site_data/siteMetaData";
import Head from "next/head";
import { ReactNode } from "react";

interface CenterContainerProps {
  children: ReactNode;
  siteMetaData?: SiteMetaData;
}

/**
 * Standard center container layout for a page
 * @param CenterContainerProps
 * @returns TSX Element
 */
const CenterContainer = (props: CenterContainerProps) => {
  // Merge siteMetaData with props.siteMetaData
  const additionalData: SiteMetaData = {
    ...siteMetaData,
    ...props.siteMetaData,
  };

  return (
    <>
      <Head>
        <title>{additionalData.title}</title>
        <meta name="description" content={additionalData.description} />
      </Head>
      <main className="w-full h-screen flex flex-col items-center">
        <div className="w-3/4 lg:w-1/2">
        <Poemtell />
          {props.children}
        </div>
      </main>
    </>
  );
};

export default CenterContainer;
