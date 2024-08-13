import localFont from "next/font/local";

const sourceSansPro = localFont({
  src: [
    {
      path: "../../public/fonts/SourceSansPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SourceSansPro-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/SourceSansPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default sourceSansPro;
