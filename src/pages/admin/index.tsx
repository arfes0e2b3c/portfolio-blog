import { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AdminList } from '@/components/AdminList'

const queryClient = new QueryClient()

const Admin: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminList />
    </QueryClientProvider>
  )
}

export default Admin
