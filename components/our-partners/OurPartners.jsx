import "./ourPartners.css"

export const OurPartner = ({name, image, style}) => {
    return (
        <div>
            <img src={`/business_partners/${image}`} alt={name} className="our-Partner"/>
        </div>
    )
};

