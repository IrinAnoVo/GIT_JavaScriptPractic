import React from 'react'
// props = {
//     title: "Item 2",
//     desc: "Hello world"
// }
const PostItem = ({ title, desc }) => {
    // const { title, desc } = props
    // const title = props.title
    // const desc = props.desc
  return (
    <div className="item">
        <h2 className='item-title'>{title}</h2>
        <p className='item-desc'>{desc}</p>
    </div>
  )
}

export default PostItem