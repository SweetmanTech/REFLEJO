import { Box, Input } from 'degen'
import CreateDropButton from '@components/CreateDropButton'
import { useCreateDrop } from '@providers/CreateDropProvider'

const CreateForm = () => {
  const { setContractMetadata, setMusicMetadata, fundsRecipient, setFundsRecipient } =
    useCreateDrop()

  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ md: '180' }}
      alignItems="center"
      gap="5"
      marginBottom={15}
    >
      <Input
        placeholder="ipfs://"
        label="music metadata"
        onChange={(e) => {
          setMusicMetadata(e.target.value)
        }}
      />
      <Input
        placeholder="ipfs://"
        label="contract metadata"
        onChange={(e) => {
          setContractMetadata(e.target.value)
        }}
      />
      <Input
        placeholder={fundsRecipient}
        label="seller funds recipient"
        onChange={(e) => {
          setFundsRecipient(e.target.value)
        }}
      />
      <CreateDropButton />
    </Box>
  )
}

export default CreateForm
