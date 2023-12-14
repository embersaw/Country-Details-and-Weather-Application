import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Homepage from './Features/Homepage/Homepage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Homepage />
    </QueryClientProvider>
  );
}

export default App;
