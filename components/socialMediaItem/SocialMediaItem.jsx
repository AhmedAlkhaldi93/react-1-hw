import "./socialMediaItem.css"

export const SMItem = ({url, title, icon}) => {
    return (
        <li>
            <img src={`/socialmedia/${icon}`} alt={title} className="socialMediaItem"/>
            <a href={url}>
                {title}
            </a>
        </li>
    )
};