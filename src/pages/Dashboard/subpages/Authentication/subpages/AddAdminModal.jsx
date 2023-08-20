import React, {useState} from 'react'
import { Modal, ModalBody, ModalCloseButton, ModalContent, Button, Heading, Icon, Text, Box, ModalOverlay, Image, Spinner, useDisclosure, Stack, Input, FormControl, FormLabel } from '@chakra-ui/react'
import uploadBg from '../../../../../assets/upload-img.png'
import {FaCamera} from 'react-icons/fa'

const AddAdminModal = ({setAddAdmin}) => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  const [loading, setLoading] = useState(false);
  return (
      <Modal
          closeOnOverlayClick={false}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
      >
          <ModalOverlay />
          <ModalContent maxW="600px" bg="white" py="10" px="4">
              <Box>
                  <ModalCloseButton onClick={() => setAddAdmin(false)} />
                  <ModalBody>
                    <Stack direction='row' spacing={6}>
                          <Box textAlign="center" mb="4" w='180px' h='210px'>
                             <FormLabel 
                                w='100%' 
                                h='180px' 
                                bg='#009F94' 
                                borderRadius={43} 
                                mb='1' 
                                htmlFor='upload' 
                                bgImage={uploadBg} 
                                backgroundRepeat='no-repeat' 
                                backgroundPosition='bottom'
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                            >
                                <Input type='file' id='upload' display='none' />
                                <Box color='white' textAlign='center' p='2'>
                                    <Icon as={FaCamera} fontSize={25} />
                                    <Text>click to change/upload picture</Text>
                                </Box>
                             </FormLabel>
                             <Text>name of picture</Text>
                          </Box>
                          <Box textAlign="center" w='340px'>
                              <Stack>
                                <FormControl>
                                    <Box mb='5'>
                                        <FormLabel fontSize={15}>Full Name</FormLabel>
                                        <Input type='text' placeholder='Enter full name' />
                                    </Box>
                                    <Box mb='5'>
                                        <FormLabel fontSize={15}>Last Name</FormLabel>
                                        <Input type='text' placeholder='Enter full name' />
                                    </Box>
                                    <Box mb='5'>
                                        <FormLabel fontSize={15}>Email</FormLabel>
                                        <Input type='text' placeholder='Enter full name' />
                                    </Box>
                                    <Box mb='5'>
                                        <FormLabel fontSize={15}>Password</FormLabel>
                                        <Input type='text' placeholder='Enter full name' />
                                    </Box>
                                </FormControl>
                                  <Button
                                      fontWeight="medium"
                                      fontSize={14}
                                      color="white"
                                      bg="#00BFB2"
                                      w='150px'
                                  //   onClick={() => HandleSubmit()}
                                  >
                                      {loading ? <Spinner /> : 'Update'}
                                  </Button>
                              </Stack>
                          </Box>
                    </Stack>
                  </ModalBody>
              </Box>
          </ModalContent>
      </Modal>
  )
}

export default AddAdminModal