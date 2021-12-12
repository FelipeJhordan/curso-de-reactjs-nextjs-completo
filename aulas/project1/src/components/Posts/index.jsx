import { PostCard } from '../PostCard';
import P from 'prop-types';
export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard content={post} key={post.id} />
    ))}
  </div>
);

Posts.propTypes = {
  posts: [],
};

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      content: P.object,
    }),
  ),
};
