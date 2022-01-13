import {useCallback, useState} from 'react'

import {Tags} from 'src/components/Tags'

type TagContainerProps = {
  tagNames: any
}

const TagContainer = ({tagNames}: TagContainerProps) => {
  const [activeKey, setActiveKey] = useState<null | string>(
    null
  )

  const handleKeySelect = useCallback((key: string) => {
    setActiveKey(key)
  }, [])

  return (
    <div style={{color: 'red'}}>
      {Object.keys(tagNames).map((key) => (
        <div key={key}>
          <Tags
            tagNames={tagNames}
            itemKey={key}
            handleKeySelect={handleKeySelect}
            selectedKey={activeKey}
          />
        </div>
      ))}
    </div>
  )
}

export default TagContainer
