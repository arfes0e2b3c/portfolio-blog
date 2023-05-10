import { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AdminEdit } from '@/components/AdminEdit'

const queryClient = new QueryClient()

const AdminEditPage: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminEdit />
    </QueryClientProvider>
  )
}

export default AdminEditPage
