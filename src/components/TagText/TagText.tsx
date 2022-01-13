import {Button} from 'src/components/Button'
import {P} from 'src/components/Typography'
import {useStore} from 'src/store'

type TagTextProps = {
  text: string
  itemKey: string
  itemValue: string
}

const TagText = ({
  text,
  itemKey,
  itemValue,
}: TagTextProps) => {
  const {updateEndpoint} = useStore()

  // console.log({itemValue})

  return (
    <Button
      onClick={() => updateEndpoint(itemKey, itemValue)}
    >
      <P text={text} />
    </Button>
  )
}

export default TagText
