import React, {useState} from 'react'
import Header from './Header'
import AdminTable from './subpages/AdminTable'
import { Box } from '@chakra-ui/react'
import AddAdminModal from './subpages/AddAdminModal'
import DeleteModal from './subpages/DeleteModal'

const index = () => {
  const [deleteAdmin, setDeleteAdmin] = useState(false);
  const [addAdmin, setAddAdmin] = useState(false);
  return (
    <Box as='section' py='5' w='100%'>
        {addAdmin && <AddAdminModal setAddAdmin={setAddAdmin} />}
        {deleteAdmin && <DeleteModal setDeleteAdmin={setDeleteAdmin} />}
        <Header setAddAdmin={setAddAdmin} /> 
        <AdminTable setAddAdmin={setAddAdmin} setDeleteAdmin={setDeleteAdmin}  />
    </Box>
  )
}

export default index