import { useSelector } from 'react-redux';
import { selectAllPosts } from './postSlice';
import PostAuthor from './PostAuthor';
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo';

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
    console.log(orderedPosts);

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id} style={{ border: '2px solid gray', padding: '16px', margin: '16px', borderRadius: '16px' }}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{color: 'orangeRed'}}><small><PostAuthor userId={post.userId} /></small></span>
                <span style={{color: 'green'}}><small><TimeAgo timestamp={post.date} /></small></span>
            </p>
            <div>
                <ReactionButtons post={post} />
            </div>
        </article>
    ));

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
};

export default PostsList;