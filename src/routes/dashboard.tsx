import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/dashboard')({
  head: () => vulnexaHead('Dashboard'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <Dashboard/>; }
