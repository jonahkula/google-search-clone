import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";

function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Google Search Clone - {router.query.term}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* header */}
      <Header />

      {/* results */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

// server side rendering of search results on new search
export async function getServerSideProps(context) {
  // have dummy data be true when testing to avoid exhausting google's api quota of 150 searches per day
  const useDummyData = false;

  // startIndex here for pagination, works when dummy data is false
  const startIndex = context.query.start || "0";

  // get search results from server
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
