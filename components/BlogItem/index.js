import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishDate} = blogDetails

  return (
    <li className="blog-item-container">
      <div className="head">
        <h1 className="blog-title ">{title}</h1>
        <p className="published-date ">{publishDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  )
}

export default BlogItem
