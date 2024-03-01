import { FunctionComponent } from "preact";
import { Post } from "../types.ts";

const Post: FunctionComponent<{ posts: Post[] }> = (
  { posts },
) => {
  return (
    <div class="post">
      <h1>Posts</h1>
      <ul>
        {post.map((posts) => (
          <li key={post.id}>
            <span>{post.title}:</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;