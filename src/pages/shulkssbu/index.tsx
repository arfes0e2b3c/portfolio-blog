import { fetchArticleListAdmin } from '@/api/articleListAdmin'
import { AdminList } from '@/components/AdminList'
import { NoAuth } from '@/components/shared/NoAuth'
import { ArticleResponse } from '@/types'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from 'react-query'

export const getServerSideProps = async () => {
	const articleList = await fetchArticleListAdmin()
	return {
		props: {
			articleList,
		},
	}
}

const queryClient = new QueryClient()

const AdminIndexPage: NextPage<{ articleList: ArticleResponse }> = ({
	articleList,
}) => {
	const { status, data } = useSession()
	if (status !== 'authenticated') {
		return <NoAuth />
	}
	if (data.user?.email !== process.env.NEXT_PUBLIC_GITHUB_EMAIL_ADDRESS) {
		alert(
			'認証ユーザーではありません。別アカウントでのログインをお試しください。'
		)
		return <NoAuth />
	}
	return (
		<QueryClientProvider client={queryClient}>
			<AdminList articleList={articleList} />
		</QueryClientProvider>
	)
}

export default AdminIndexPage
