import { AdminCreate } from '@/components/AdminCreate'
import { NoAuth } from '@/components/shared/NoAuth'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'

const AdminCreatePage: NextPage = () => {
	const { status } = useSession()
	if (status !== 'authenticated') {
		return <NoAuth />
	}
	return <AdminCreate />
}

export default AdminCreatePage
