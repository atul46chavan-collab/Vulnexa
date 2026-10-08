import { createFileRoute } from '@tanstack/react-router';
import { FunctionDetail } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/functions_/$functionId_/audit')({
  head: () => vulnexaHead('Function Audit Trail'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() { const params = Route.useParams(); return <FunctionDetail functionId={params.functionId} initialTab="Audit Trail"/>; }
