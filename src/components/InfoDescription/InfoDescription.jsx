
const InfoDescription = ({description}) => {
    return (
        description.map((item, i) => {
            return (
                <div className="info__description" key={i}>
                    <div className="info__icon">
                        <img src={item.image} alt="Temperature" />
                    </div>
                    <div className="info__description-title">{item.name}</div>
                    <div className="info__description-text">
                        {item.text}
                    </div>
                </div>
            )
        })
    )
}

export default InfoDescription;