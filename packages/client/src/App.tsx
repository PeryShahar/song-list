
import { QueryClient, QueryClientProvider } from "react-query";
import SongList from './components/SongList';

import './app.css'

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <SongList />
        </QueryClientProvider>
    );
}