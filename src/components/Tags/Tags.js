import './Tags.css';

export const Tags = ({tags = ['html', 'css', 'react']}) => {
    return (
        <div className="tags-container">
            <i className="fa-solid fa-tag yellow"></i>
            <ul className="tags">
                {
                    tags.map((t, i) => <li key={i}>{t}</li>)
                }
            </ul>
        </div>
    );
};