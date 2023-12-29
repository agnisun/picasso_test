import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './config'
import { IPost } from '@shared/types/post'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], void>({
            query: () => ({ url: 'posts' }),
            providesTags: (result) =>
                result ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), 'Post'] : ['Post'],
        }),
        getPost: builder.query<IPost, string>({
            query: (id: string) => `posts/${id}`,
            providesTags: ['Post'],
        }),
    }),
})

export const { useGetPostsQuery, useGetPostQuery } = postsApi
