import './style.css'

function Note({ title, description, importance, active, onToggleActive, onDelete }) {
    return (
        <section className={active ? 'active-note container' : 'inactive-note container'}>
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>
            <p className='importance'>PRIORITY: {importance}</p>

            <div className='noteButtonsContainer'>
                <button className='activeButton' onClick={onToggleActive}>
                    {active ? 'Unactive' : 'Active'}
                </button>
                <button className='deleteButton' onClick={onDelete}>Delete</button>
            </div>
        </section>
    );
};

export default Note;