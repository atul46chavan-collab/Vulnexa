import { createFileRoute } from '@tanstack/react-router';
import { FunctionDetail } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/functions_/$functionId')({
  head: () => cgvaHead('Function Analysis'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() { const params = Route.useParams(); return <FunctionDetail functionId={params.functionId}/>; }
