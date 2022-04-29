import * as React from "react";
import type { GetStaticProps, NextPage } from "next";

interface Props {
  char: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: any[];
    starships: any[];
    created: Date;
    edited: Date;
    url: string;
  };
}

const About: NextPage<Props> = ({ char }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ff5151",
      }}
    >
      <div
        style={{ width: "auto", backgroundColor: "#3a6e8a", padding: "10px" }}
      >
        <p
          style={{ fontFamily: "sans-serif", color: "#fff", fontSize: "20px" }}
        >
          {char?.name?.[0]?.toUpperCase() + char?.name?.slice(1)}
        </p>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const randNum = Math.floor(Math.random() * 82);
  const char = await fetch(`https://swapi.dev/api/people/${randNum}`) // does not work when building locally because dev server is not running
    .then((res) => res.json())
    .then((res) => res);

  return {
    props: {
      char,
    },
    // revalidate: 10,
  };
};

export default About;
