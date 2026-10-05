import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/dashboard')({
  head: () => cgvaHead('Dashboard'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <Dashboard/>; }
