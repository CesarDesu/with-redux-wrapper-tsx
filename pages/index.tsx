import type { NextPage } from "next";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../redux/actions/appAction";
import { IAppState } from "../redux/reducers/appReducer";

const Home: NextPage = () => {
  const state = useSelector((state: IAppState) => state.count);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addCount());
  };
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
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
