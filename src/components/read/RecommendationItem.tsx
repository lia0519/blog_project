import { NavLink } from "react-router";

type RecommendationItemProps = {
    id: number;
    image: string;
    title: string;
    desc: string;
};

export default function RecommendationItem({
    id,
    image,
    title,
    desc,
}: RecommendationItemProps) {
    return (
        <li>
            <NavLink to={`/read/${id}`}>
                <div className="page__recommend-list">
                    <img src={image} alt="" className="page__recommend-img" />
                    <div>
                        <h4 className="page__recommend-subtitle">{title}</h4>
                        <p className="page__recommend-desc">{desc}</p>
                    </div>
                </div>
            </NavLink>
        </li>
    );
}
