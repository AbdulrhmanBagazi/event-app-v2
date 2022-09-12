// Render Prop
import React from 'react'
import { Posts_ListQuery } from '../../graphql/generated'

const PostsList: React.FC<{
  data: Posts_ListQuery | undefined
  loading: boolean
}> = ({ data, loading }) => {
  return (
    <div className="flex flex-1 bg-slate-400">
      {loading ? null : data?.Posts_list_meta?.total}
      {loading
        ? null
        : data?.Posts_list.map((val) => {
            return <h1>{val.title}</h1>
          })}
    </div>
  )
}

export default PostsList
