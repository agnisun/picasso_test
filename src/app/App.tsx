import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { withProviders } from './providers'
import { Home } from '@pages/home'
import { Post } from '@pages/post'
import 'reset-css'
import './styles/global.css'

export const App = withProviders(function () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
        </BrowserRouter>
    )
})
