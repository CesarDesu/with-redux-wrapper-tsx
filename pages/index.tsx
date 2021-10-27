import type { NextPage } from "next";
import Link from "next/link";
import { useSelector } from "react-redux";
import { IAppState } from "../redux/reducers/appReducer";

const Home: NextPage = () => {
  const state = useSelector((state: IAppState) => state.count);
  return (
    <div>
      <p>This is Home</p>
      <p>
        Go to:{" "}
        <Link href="/feed">
          <a>Feed Page</a>
        </Link>
      </p>
      <p>Count: {state}</p>
    </div>
  );
};

export default Home;
