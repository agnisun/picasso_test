import { useGetPostQuery } from '@app/store/api/posts'
import { Loader } from '@shared/components/loader'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export function View() {
    const { id } = useParams()
    const { data, error, isLoading } = useGetPostQuery(id || '')
    const navigate = useNavigate()

    if (error) {
        navigate('/', { replace: true })
        return
    }

    return (
        <main className="page">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="post-profile">
                    <div className="post-profile__back">
                        <Link to="/" className="post-list__item-link">
                            Назад
                        </Link>
                    </div>
                    <h1 className="post-profile__title">{data?.title}</h1>
                    <p className="post-profile__text">{data?.body}</p>
                </div>
            )}
        </main>
    )
}
