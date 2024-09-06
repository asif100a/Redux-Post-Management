import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

function PostAuthor({userId}) {
  const users = useSelector(selectAllUsers);
//   console.log(typeof userId);

  const author = users.find(user => user.id === parseInt(userId));
//   console.log(author);

  return <span>By: {author ? author.name : 'Unknown author'}</span>
}

PostAuthor.propTypes = {
    userId: PropTypes.any
};

export default PostAuthor
