import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reactionAdded } from './postSlice';
console.log(reactionAdded);

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '💓',
    rocket: '🚀',
    coffee: '🍵'
};

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type='button'
                style={{ margin: '4px', padding: '4px', backgroundColor: 'transparent', border: 'none', outline: 'none' }}
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    });

    return <div>{reactionButtons}</div>
};

ReactionButtons.propTypes = {
    post: PropTypes.any,
};

export default ReactionButtons;