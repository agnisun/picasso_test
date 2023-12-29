import { PostItem } from '@entities/post-item'
import { IPost } from '@shared/types/post'
import { CSSProperties, useCallback } from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList } from 'react-window'

interface ViewProps {
    posts: IPost[]
    isError: boolean
}

export function View({ posts, isError }: ViewProps) {
    const ListRow = useCallback(
        ({ index, style }: { index: number; style: CSSProperties }) => {
            const post = posts[index]

            return <PostItem index={index} style={style} post={post} key={post.id} />
        },
        [posts]
    )

    if (isError) {
        return <p className="loading">Something went wrong</p>
    }

    return (
        <div className={'posts-list'}>
            <AutoSizer>
                {({ height, width }) => (
                    <FixedSizeList
                        height={height}
                        itemCount={posts.length}
                        itemSize={80}
                        width={width}
                        style={{ padding: '30px 0' }}
                    >
                        {ListRow}
                    </FixedSizeList>
                )}
            </AutoSizer>
        </div>
    )
}
