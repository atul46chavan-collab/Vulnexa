import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/')({
  head: () => vulnexaHead('Workspace Overview', 'Explore the Vulnexa demonstration workspace for contract-guided C/C++ security auditing.'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <Dashboard/>; }
