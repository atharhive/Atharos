import Head from "next/head";
import HeroSection from "../components/HeroSection";

export default function Home() {
  const data = {
    title: "Athar OS",
    description:
      "An interactive desktop-style portfolio experience with applications, tools, media, and games.",
    author: "Athar OS",
    themeColor: "#68bcdc",
    url: "http://localhost:3000",
    favicon: "/favicon.svg?v=2",
    siteName: "Athar OS",
  };

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="author" content={data.author} />
        <meta name="theme-color" content={data.themeColor} />
        <meta name="robots" content="Index" />
        <link rel="canonical" href={data.url} />
        <link rel="icon" type="image/svg+xml" href={data.favicon} />
        <link rel="shortcut icon" type="image/svg+xml" href={data.favicon} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={data.siteName} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:url" content={data.url} />

        <meta property="twitter:url" content={data.url} />
        <meta property="twitter:title" content={data.title} />
        <meta property="twitter:description" content={data.description} />
      </Head>
      <main>
        <HeroSection />
      </main>
    </>
  );
}
