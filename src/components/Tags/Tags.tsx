import {formatTagNames} from 'src/utils/getTagNames'

type TagsProps = {
  tagNames: any
}

const Tags = ({tagNames}: TagsProps) => {
  return (
    <div style={{color: 'red'}}>
      {tagNames.map((tags: string) => (
        <p key={tags}>{formatTagNames(tags)}</p>
      ))}
    </div>
  )
}

export default Tags
