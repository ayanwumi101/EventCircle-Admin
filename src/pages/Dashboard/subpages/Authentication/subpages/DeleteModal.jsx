import React, {useState} from 'react'
import { Modal, ModalBody, ModalCloseButton, ModalContent, Button, Heading, Text, Box, ModalOverlay, Image, Spinner, useDisclosure, VStack } from '@chakra-ui/react'
import errorImg from '../../../../../assets/errorImg.svg'

const DeleteModal = ({setDeleteAdmin}) => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  const [loading, setLoading] = useState(false)
  return (
      <Modal
          closeOnOverlayClick={false}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
      >
          <ModalOverlay />
          <ModalContent maxW="420px" bg="white" py="8" px="6">
              <Box>
                  <ModalCloseButton onClick={() => setDeleteAdmin(false)} />
                  <ModalBody>
                      <Image src={errorImg} display="block" mx="auto" mb="3" />
                      <Box textAlign="center" mb="4">
                          <Heading fontWeight={600} fontSize="25px" mb="3">
                              Delete User!
                          </Heading>
                          <Text fontSize={14} mb='2.5'>
                              Are you sure you want to delete this user?
                          </Text>
                      </Box>

                      <Box textAlign="center">
                         <VStack spacing={3}>
                              <Button
                                  fontWeight="medium"
                                  fontSize={14}
                                  color="white"
                                  bg="#00BFB2"
                                  w='180px'
                              //   onClick={() => HandleSubmit()}
                              >
                                  {loading ? <Spinner /> : 'Yes Confirm'}
                              </Button>
                              <Button
                                  fontWeight="medium"
                                  fontSize={14}
                                  color="black"
                                  w='180px'
                                  onClick={() => setDeleteAdmin(false)}
                              //   onClick={() => HandleSubmit()}
                              >
                                  {loading ? <Spinner /> : 'No Cancel'}
                              </Button>
                         </VStack>
                      </Box>
                  </ModalBody>
              </Box>
          </ModalContent>
      </Modal>
  )
}

export default DeleteModal