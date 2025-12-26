import { NavLink } from "react-router";

type PostItemProps = {
    id: number;
    image: string;
    tag: string;
    title: string;
    meta: string;
    excerpt: string;
};

export default function PostItem({ id, image, tag, title, meta, excerpt }: PostItemProps) {
    return (
        <article className="posts-area__post">
            <NavLink to={`/read/${id}`} className="posts-area__post-link">
                <img src={image} alt={title} className="posts-area__post-image" />
                <em className="posts-area__post-tag">{tag}</em>
                <h2 className="posts-area__post-title">{title}</h2>
                <p className="posts-area__post-meta">{meta}</p>
                <p className="posts-area__post-excerpt">{excerpt}</p>
            </NavLink>
        </article>
    );
}
