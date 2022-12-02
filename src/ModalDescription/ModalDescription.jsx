
const ModalDescription = ({description}) => {
    return (
        description.map((item, i) => {
            return (
                <div className="modal__description-item" key={i}>
                    <div className="modal__icon">
                        <img src={item.image} alt="Temperature" />
                    </div>
                    <div className="modal__description-title">{item.name}</div>
                    <div className="modal__description-text">
                        {item.text}
                    </div>
                </div>
            )
        })
    )
}

export default ModalDescription;