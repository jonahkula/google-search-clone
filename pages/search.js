import Head from "next/head";
import Header from "../components/Header";

function Search() {
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
