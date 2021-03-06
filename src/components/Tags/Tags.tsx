import {useMemo} from 'react'

import {Button} from 'src/components/Button'
import {TagText} from 'src/components/TagText'
import {
  formatTagNames,
  formatValueOutput,
} from 'src/utils/getTagNames'

type TagsProps = {
  tagNames: Record<string, any>
  itemKey: string
  handleKeySelect: (key: string) => void
  selectedKey: null | string
}

const Tags = ({
  tagNames,
  itemKey,
  handleKeySelect,
  selectedKey,
}: TagsProps) => {
  const isSelectedKey = useMemo(() => {
    return selectedKey === itemKey
  }, [selectedKey, itemKey])

  // console.log({selectedKey})

  return (
    <div style={{color: 'red'}}>
      <div onClick={() => handleKeySelect(itemKey)}>
        <Button text={formatTagNames(itemKey)} />
        {isSelectedKey ? (
          <div style={{border: '1px dashed dodgerblue'}}>
            {tagNames[itemKey].map((value: any) => (
              <TagText
                key={value}
                itemKey={itemKey}
                itemValue={value}
                text={formatValueOutput(value)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Tags
