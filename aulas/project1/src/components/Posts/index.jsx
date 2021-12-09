import { PostCard } from "../PostCard";

export const Posts = ({posts}) => (
    <div className="posts">
          {
            posts.map(post => (
              <PostCard content={post} key={post.id} />
            ))
          }
        </div>
)