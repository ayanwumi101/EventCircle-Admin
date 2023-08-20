import { Box, Button, Stack} from '@chakra-ui/react'
import React from 'react'

const Header = ({setAddAdmin}) => {
  return (
    <Stack w='100%' justifyContent='flex-end' alignItems='flex-end'>
          <Box textAlign='right' w='135px' float='right'>
              <Button bg='#00BFB2' color='white' h='50px' fontSize={14} w='135px' onClick={() => setAddAdmin(true)}>Add Admin</Button>
          </Box>
    </Stack>
  )
}

export default Header