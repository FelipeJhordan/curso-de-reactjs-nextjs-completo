import propTypes from 'prop-types';

export const PostCard = ({ content: post }) => (
  <div className="post">
    <div className="post__content">
      <img src={post.cover} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  content: propTypes.object.isRequired,
};
