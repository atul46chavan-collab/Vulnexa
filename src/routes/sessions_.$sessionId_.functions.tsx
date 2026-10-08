import { createFileRoute } from '@tanstack/react-router';
import { SessionDetail } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/sessions_/$sessionId_/functions')({
  head: () => vulnexaHead('Session Functions'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() { const params = Route.useParams(); return <SessionDetail sessionId={params.sessionId} initialTab="Functions"/>; }
