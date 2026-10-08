import { createFileRoute } from '@tanstack/react-router';
import { Login } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/login')({
  head: () => vulnexaHead('Sign in'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <Login/>; }
