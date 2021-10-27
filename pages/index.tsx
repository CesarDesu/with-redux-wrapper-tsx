import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <p>This is Home</p>
      <p>
        Go to:{" "}
        <Link href="/feed">
          <a>Feed Page</a>
        </Link>
      </p>
    </div>
  );
};

export default Home;
