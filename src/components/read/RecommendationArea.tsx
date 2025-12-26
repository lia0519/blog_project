import { dummyImage1 } from "../../assets/images/images";

export default function RecommendationArea() {
    return (
        <article className="page__recommend">
            <h3 className="page__recommend-title">Recommend Reading</h3>
            <ul className="page__recommend-lists">
                {/* <!-- RecommendationItem --> */}
                <li>
                    <a href="">
                        <div className="page__recommend-list">
                            <img src={dummyImage1} alt="" className="page__recommend-img" />
                            <div>
                                <h4 className="page__recommend-subtitle">
                                    Why you don’t need more than 3 pieces of clothing
                                </h4>
                                <p className="page__recommend-desc">
                                    Et vitae, mollis euismod lobortis blandit amet sed amet.
                                    Amet ut amet nisl tortor arcu non id nulla mauris neque
                                    nisl magna.Et vitae, mollis euismod lobortis blandit amet
                                    sed amet. Amet ut amet nisl tortor arcu non id nulla
                                    mauris neque nisl magna.Et vitae, mollis euismod lobortis
                                    blandit amet sed amet. Amet ut amet nisl tortor arcu non
                                    id nulla mauris neque nisl magna.Et vitae, mollis euismod
                                    lobortis blandit amet sed amet. Amet ut amet nisl tortor
                                    arcu non id nulla mauris neque nisl magna.
                                </p>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div className="page__recommend-list">
                            <img src={dummyImage1} alt="" className="page__recommend-img" />
                            <div>
                                <h4 className="page__recommend-subtitle">
                                    Why you don’t need more than 3 pieces of clothing
                                </h4>
                                <p className="page__recommend-desc">
                                    Et vitae, mollis euismod lobortis blandit amet sed amet.
                                    Amet ut amet nisl tortor arcu non id nulla mauris neque
                                    nisl magna.Et vitae, mollis euismod lobortis blandit amet
                                    sed amet. Amet ut amet nisl tortor arcu non id nulla
                                    mauris neque nisl magna.Et vitae, mollis euismod lobortis
                                    blandit amet sed amet. Amet ut amet nisl tortor arcu non
                                    id nulla mauris neque nisl magna.Et vitae, mollis euismod
                                    lobortis blandit amet sed amet. Amet ut amet nisl tortor
                                    arcu non id nulla mauris neque nisl magna.
                                </p>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </article>
    );
}
