import React from "react";
import Link from "next/link";

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

export default Feed;
