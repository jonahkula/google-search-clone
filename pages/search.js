import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";

function Search({ results }) {
  return (
    <div>
      <Head>
        <title>Google Search Clone - Search Results</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* header */}
      <Header />

      {/* results */}
    </div>
  );
}

export default Search;

// server side rendering of search results on new search
export async function getServerSideProps(context) {
  // have dummy data be true when testing to avoid exhausting google's api quota of 150 searches per day
  const useDummyData = true;

  // get search results from server
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
