import React from 'react';
import "./Page.css";
import * as eyeImage from "../../assets/eye.jpg";
import * as peopleImage from "../../assets/people.jpg";

const Page = ({ match, data }) => {
    let id = match.params.id || "1";

    let item = data.find((elem) => {
        return elem.id === parseInt(id,10);
    });
    if (!item) return null;

    let stars = item.stars.reduce((prev, curr) => {
        return `${prev}, ${curr}`;
    });

    return (
        <div className="page">
            <div className="page__container">
                <article className="page__article">
                    <span className="page__label">
                        {item.label}
                        <span className="page__year"> ({item.year}) </span>
                    </span>
                    <p>Stars: {stars}</p>
                </article>
                <aside className="page__aside">
                    <section className="page__statistics">
                        <div className="page__reviews">
                            <img className="page__img" src={eyeImage} alt='Review' />
                            <p>
                                Reviews:{item.reviews}
                            </p>
                        </div>
                        <div className="page__comments">
                            <img className="page__img" src={peopleImage} alt='Comments' />
                            <p>Coments:{item.comments}</p>
                        </div>
                    </section>
                </aside>
            </div>
            <hr className="page__hr" />
            <footer className="page__footer">
                <h3>About #{id}</h3>
            </footer>
        </div>
    )
}
export default Page;