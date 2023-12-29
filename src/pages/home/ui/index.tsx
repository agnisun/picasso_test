import { useGetPostsQuery } from '@app/store/api/posts'
import { PostList } from '@features/post-list'
import { Loader } from '@shared/components/loader'

export function View() {
    const { data, error, isLoading } = useGetPostsQuery()

    return <main className="page">{isLoading ? <Loader /> : <PostList posts={data || []} isError={!!error} />}</main>
}
