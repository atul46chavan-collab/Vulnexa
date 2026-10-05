import { createFileRoute } from '@tanstack/react-router';
import { Reports } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/reports/$reportId')({
  head: () => cgvaHead('Analysis Report'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() { const params = Route.useParams(); return <Reports reportId={params.reportId}/>; }
