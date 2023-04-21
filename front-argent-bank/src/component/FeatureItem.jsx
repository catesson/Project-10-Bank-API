
import "../styles/featureItem.css"

export function FeatureItem({picture, title, content}){
   return <div className="feature-item">
          <img src={picture} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>
            {content}
          </p>
        </div>
}