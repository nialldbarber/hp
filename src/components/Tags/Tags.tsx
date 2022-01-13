import {useState} from 'react'

import {P} from 'src/components/Typography'
import {
  formatTagNames,
  formatValueOutput,
} from 'src/utils/getTagNames'

type TagsProps = {
  tagNames: any
  itemKey: any
}

const Tags = ({tagNames, itemKey}: TagsProps) => {
  const [showSubSection, setShowSubSection] =
    useState(false)

  return (
    <div style={{color: 'red'}}>
      <div
        onMouseEnter={() => setShowSubSection(true)}
        onMouseLeave={() => setShowSubSection(false)}
      >
        <P text={formatTagNames(itemKey)} />
        {showSubSection ? (
          <div style={{border: '1px dashed dodgerblue'}}>
            {tagNames[itemKey].map((value: any) => (
              <P
                key={value}
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
