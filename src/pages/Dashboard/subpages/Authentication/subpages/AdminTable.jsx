import React, {useState} from 'react'
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer, Heading, Text, Input, Button, InputGroup, InputRightElement, Stack
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


const AdminTable = ({data, setAddAdmin, setDeleteAdmin}) => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show);

    const editAdmin = () => {
        setAddAdmin(true)
    }

    const deleteAdmin = () => {
        setDeleteAdmin(true)
    }
    
  return (
      <Box my="8" minH='200px'>
          <TableContainer bg="white" minH='200px'>
              <Table variant="simple">
                  <Thead bg="#EEEEEE" px="17px" py="40px">
                      <Tr fontSize={14} color="black">
                          <Th>S/N</Th>
                          <Th>First Name</Th>
                          <Th>Last Name</Th>
                          <Th>Email</Th>
                          <Th>Password</Th>
                          <Th>Actions</Th>
                      </Tr>
                  </Thead>
                  <Tbody>
                      {/* {data?.map((item, index) => {
                          const subItem = auxData?.find(x => x.id === item.ItemId);
                          return (
                              <> */}
                                  <Tr fontSize={14} _hover={{ bg: '#FAFAFA' }}>
                                      <Td>1</Td>
                                      <Td>Abdulroheem</Td>
                                      <Td>Ayanwumi</Td>
                                      <Td>ayanwunmiabdulroheem@gmail.com</Td>
                                      <Td>
                                        <InputGroup size='md'>
                                            <Input
                                                pl='0'
                                                pr='4.5rem'
                                                type={show ? 'text' : 'password'}
                                                placeholder='Enter password'
                                                value="hfhffjdieieuieur"
                                                border='none'
                                                w='170px'
                                                outline='none'
                                            />
                                            <InputRightElement width='4.5rem'>
                                                <Button h='1.75rem' size='sm' onClick={handleClick} bg='none'>
                                                    {show ? <ViewOffIcon /> : <ViewIcon />}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                      </Td>
                                      <Td>
                                        <Stack spacing={2} direction='row'>
                                            <Button bg='#00BFB2' color='white' fontWeight='medium' fontSize={14} onClick={editAdmin}>Edit</Button>
                                            <Button bg='#00BFB2' color='white' fontWeight='medium' fontSize={14} onClick={deleteAdmin}>Delete</Button>
                                        </Stack>
                                      </Td>
                                  </Tr>
                              {/* </>
                          );
                      })} */}
                  </Tbody>
              </Table>
          </TableContainer>

          {!data && (
              <Box w='410px' textAlign='center' mx='auto'>
                  <Heading fontSize={32} fontWeight='medium' color='black' mb='2'>Create your first admin</Heading>
                  <Text fontSize={18} color='#8C8C8C'>
                      Don’t waste time, click the button
                      at right corner to add admin
                  </Text>
              </Box>
          )}
      </Box>
  )
}

export default AdminTable