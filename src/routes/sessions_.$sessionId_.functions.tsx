import { createFileRoute } from '@tanstack/react-router';
import { SessionDetail } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/sessions_/$sessionId_/functions')({
  head: () => cgvaHead('Session Functions'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() { const params = Route.useParams(); return <SessionDetail sessionId={params.sessionId} initialTab="Functions"/>; }
