import { createFileRoute } from '@tanstack/react-router';
import { Login } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/login')({
  head: () => cgvaHead('Sign in'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <Login/>; }
