import * as React from "react";
import type { GetStaticProps, NextPage } from "next";
import useSWR, { Fetcher, SWRConfig } from "swr";

interface Props {
  num: number;
}

const fetcher = (...args: [any]) => fetch(...args).then((res) => res.json());

const About: NextPage<Props> = ({ num }) => {
  // const { data, error } = useSWR("api/random", fetcher, {
  //   revalidateOnFocus: false,
  // });

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  // render data
  return <>{num}</>;
};

export const getStaticProps: GetStaticProps = async () => {
  const num = await fetch("http://localhost:3000/api/random") // does not work when building locally because dev server is not running
    .then((res) => res.json())
    .then((res) => res.randNum);

  return {
    props: {
      num,
    },
    revalidate: 5,
  };
};

export default About;
