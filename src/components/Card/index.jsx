import { useState } from 'react'
import './Card.scss'
const Card = ({company, title, taste, giftItems, imgPath, weightCount, weightType, offerText, disabled}) => {
    const [cardSelected, setCardSelected] = useState(false)
    const toggleSelected = () => {
      !disabled ? setCardSelected(!cardSelected) : null
    }
    return (
        <div className={disabled ? "card disabled" : (cardSelected ? "card selected" : "card")} onClick={toggleSelected}>
          <div className={disabled ? "card__content disabled" : "card__content"}>
            { disabled? (<div className="card__content__disabled"></div>) : ''}
            <div className="card__content__text">
              <div className="card__content__text-company">{company}</div>
              <div className="card__content__text-title">{title}</div>
              <div className="card__content__text-taste">{taste}</div>
              <div className="card__content__text-gift">
                {giftItems.map((item, id) => <div key={id} className="card__content__text-gift-item">{item}</div>)}
              </div>
            </div>
            <div className="card__content__cat">
              <img src={imgPath} />
            </div>
            <div className={disabled ? "card__content__weight disabled" : "card__content__weight"}>
              <div className="card__content__weight-count">{weightCount}</div>
              <div className="card__content__weight-type">{weightType}</div>

            </div>
          </div>
          <div className={disabled ? "card__offer disabled" : "card__offer"}>
            Чего сидишь? Порадуй котэ, <b onClick={toggleSelected}> купи.</b>
          </div>
        </div>
    )
}

export default Card
