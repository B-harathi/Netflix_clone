import React from 'react'
import Card from '../../components/Card/Card'

const List = ({title,data}) => {
  return (
    <div>
      <div className="result-padding">
      <h1 className="result-heading">{title}</h1>
      <div className="wish-list-items">
        {data?.map((item) => (
          <Card movie={item} />
        ))}
      </div>
    </div>

    </div>
  )
}

export default List


