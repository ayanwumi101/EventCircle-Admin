import React, {createContext, useState} from 'react'
import Sidebar from './subpages/Sidebar'
import { Box, Stack } from '@chakra-ui/react'
import Authentication from './subpages/Authentication'
import EventDetails from './subpages/EventDetails'
import Marketplace from './subpages/Marketplace'

export const TabContext = React.createContext()

const index = () => {
  const [navPosition, setNavPosition] = useState(0)
  return (
    <Box as='section' w={['100%','100%', '95%']} mx='auto'>
        <TabContext.Provider value={{navPosition, setNavPosition}}>
        <Stack direction='row' spacing={6}>
            <Box w='20%'>
                <Sidebar />
            </Box>
            <Box w='80%'>
                {navPosition === 0 && <Authentication />}
                {navPosition === 1 && <EventDetails />}
                {navPosition === 2 && <Marketplace />}
            </Box>
        </Stack>
        </TabContext.Provider>
    </Box>
  )
}

export default index