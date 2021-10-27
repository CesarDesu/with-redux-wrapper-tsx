import React from "react";
import Link from "next/link";
import { wrapper } from "../redux/store/store";
import { GetServerSideProps } from "next";

const Feed = () => {
  return (
    <div>
      <p>This is Feed</p>
      <p>
        Go to:{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req, res, ...etc }) => {
//       console.log(store.dispatch);
//       // store.dispatch({ type: "ADD" });
//       console.log(
//         "2. Page.getServerSideProps uses the store to dispatch things"
//       );
//       // store.dispatch({type: 'TICK', payload: 'was set in other page'});
//     }
// );
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    console.log("object init");
    console.log(store);
    console.log("object");
    return {
      props: {},
    };
  });

// export const getServerSideProps: GetServerSideProps = async ({
//   params,
//   res,
//   locale,
// }) => {
//   try {
//     return {
//       props: {},
//     };
//   } catch (error: any) {
//     return {
//       notFound: true,
//     };
//   }
// };

export default Feed;
