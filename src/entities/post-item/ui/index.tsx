import { IPost } from '@shared/types/post'
import { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

interface ViewProps {
    index: number
    post: IPost
    style: CSSProperties
}

export function View({ index, post, style }: ViewProps) {
    return (
        <div style={style} className={`post-list__item--${index % 2 ? 'od' : 'even'} post-list__item`}>
            <div className="post-list__item-container">
                <div className="post-list__item-content">
                    <h3 className="post-list__item-title">{`${index + 1}. ${post.title}`}</h3>
                    <p className="post-list__item-body">{post.body}</p>
                </div>
                <Link to={'/post/' + post.id} className="post-list__item-link">
                    Просмотр
                </Link>
            </div>
        </div>
    )
}
