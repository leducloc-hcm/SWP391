import { registerLicense } from '@syncfusion/ej2-base'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store/store'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0
    }
  }
})

registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1NpRmJGfV5ycEVHYlZTQHxaQU0SNHVRdkdnWH9ecXRVRGZcVkd2WEQ=')
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
          {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
