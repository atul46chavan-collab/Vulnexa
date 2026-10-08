import { createFileRoute } from '@tanstack/react-router';
import { Pipeline } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/sessions_/$sessionId_/pipeline')({
  head: () => vulnexaHead('Analysis Pipeline'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() { const params = Route.useParams(); return <Pipeline sessionId={params.sessionId}/>; }
