import './style.css';

function Note(title, description) {

    return (
        <section className="note">
            <h3>{title}</h3>

            <p>{description}</p>
        </section>
    );
};

export default Note;