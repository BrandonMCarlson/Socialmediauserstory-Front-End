import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "src\dummyData.js";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
