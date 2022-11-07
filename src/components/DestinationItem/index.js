// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="each-destination-card">
      <img src={imgUrl} className="image-size" alt={name} />
      <p className="destination-heading">{name}</p>
    </li>
  )
}

export default DestinationItem
