import { Box, Stack, Icon, Heading , VStack, Text, Flex, Divider} from '@chakra-ui/react'
import React, { useContext } from 'react'
import {BsShop} from 'react-icons/bs'
import {Shop, UserAdd, Calendar2} from 'iconsax-react'
import { TabContext } from '..'

const Sidebar = () => {
    const {navPosition, setNavPosition} = useContext(TabContext)
    const links =[
        {
            icon: UserAdd,
            text: 'Authentication'
        },
        {
            icon: Calendar2,
            text: 'Event Details'
        },
        {
            icon: Shop,
            text: 'Market Place'
        }
    ]

    const handleClick = (index) => {
        setNavPosition(index)
    }

  return (
     <Box as='section' h='100vh' bg='#E9EBED' w='240px'>
        <VStack py='10' spacing={8}>
            <Box>
                <Heading fontWeight='medium' fontSize={28} color='#44566C'>Dashboard</Heading>
            </Box>
            <Box>
                <Stack direction='column'>
                    <Box w='100%' bg='lightgray' h='1px'></Box>
                    {links.map((link, index) => {
                        return (
                            <>
                                <Box py='2' cursor='pointer' key={index} onClick={() => handleClick(index)} _hover={{ color: '#00BFB2' }} color={index === navPosition ? '#00BFB2' : '#383838'}>
                                    <Flex alignItems='center' gap={2}>
                                        <Icon as={link.icon} fontSize={25} />
                                        <Text fontWeight='medium'>{link.text}</Text>
                                    </Flex>
                              </Box>
                              <Box w='100%' bg='lightgray' h='1px'></Box>
                            </>
                        )
                    })}
                </Stack>
            </Box>
        </VStack>
    </Box>
  )
}

export default Sidebar