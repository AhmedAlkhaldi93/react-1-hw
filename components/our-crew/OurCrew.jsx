import "./ourCrew.css"

export const CrewMember = ({name, description, image}) => {
    return (
        <div>
            <br /><br />
            <p>
                {name}: {description}
            </p>
            <img src={`/crew/${image}`} alt={name} style={{ width: '300px', height: 'auto' }}/>
        </div>
    )
};

