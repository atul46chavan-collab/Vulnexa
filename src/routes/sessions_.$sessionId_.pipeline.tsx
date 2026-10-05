import { createFileRoute } from '@tanstack/react-router';
import { Pipeline } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/sessions/$sessionId/pipeline')({
  head: () => cgvaHead('Analysis Pipeline'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() { const params = Route.useParams(); return <Pipeline sessionId={params.sessionId}/>; }
