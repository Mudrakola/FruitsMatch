import './index.css'

const Thumbnail = props => {
  const {eachImage, onChangeImage} = props
  const {imageUrl, thumbnailUrl} = eachImage
  const onThumbnailClick = () => {
    onChangeImage(imageUrl)
  }
  return (
    <li className="image-list" onClick={onThumbnailClick}>
      <button className="button1" type="button">
        <img src={thumbnailUrl} className="thumbnail-image" alt="thumbnail" />
      </button>
    </li>
  )
}
export default Thumbnail
