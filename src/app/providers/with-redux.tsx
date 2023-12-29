import { store } from '@app/store'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

export const withRedux = (component: () => ReactNode) =>
    function ReduxProvider() {
        return <Provider store={store}>{component()}</Provider>
    }
