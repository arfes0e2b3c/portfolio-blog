import { AdminCreate } from '@/components/AdminCreate'
import { NoAuth } from '@/components/shared/NoAuth'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const AdminCreatePage: NextPage = () => {
	const { status } = useSession()
	if (status !== 'authenticated') {
		return <NoAuth />
	}
	return (
		<QueryClientProvider client={queryClient}>
			<AdminCreate />
		</QueryClientProvider>
	)
}

export default AdminCreatePage
