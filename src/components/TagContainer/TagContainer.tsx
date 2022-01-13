import {Tags} from 'src/components/Tags'

type TagContainerProps = {
  tagNames: any
}

const TagContainer = ({tagNames}: TagContainerProps) => {
  return (
    <div style={{color: 'red'}}>
      {Object.keys(tagNames).map((key) => (
        <div key={key}>
          <Tags tagNames={tagNames} itemKey={key} />
        </div>
      ))}
    </div>
  )
}

export default TagContainer
