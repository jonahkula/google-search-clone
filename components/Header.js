import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef();

  // on search, similar to index
  const search = (e) => {
    // avoid refresh and get current input
    e.preventDefault();
    const term = searchInputRef.current.value;

    // return if blank search
    if (!term) return;

    // redirect to new search
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="/logo.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="search-input">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
            defaultValue={router.query.term}
          />
          <XIcon
            className="x-icon"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="mic-icon" />
          <SearchIcon onClick={search} className="search-icon" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className="ml-auto" url="/profile.png" />
      </div>

      {/* header options */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
