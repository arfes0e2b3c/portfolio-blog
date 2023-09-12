import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { AdminCreate } from '@/components/AdminCreate'
import { NoAuth } from '@/components/shared/NoAuth'

const AdminCreatePage: NextPage = () => {
  const { status } = useSession()
  if (status !== 'authenticated') {
    return <NoAuth />
  }
  return <AdminCreate />
}

export default AdminCreatePage
