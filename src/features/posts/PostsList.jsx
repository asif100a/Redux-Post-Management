import { useSelector } from 'react-redux';
import { selectAllPosts } from './postSlice';

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article key={post.id} style={{border: '2px solid gray', padding: '16px', margin: '16px', borderRadius: '16px'}}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
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