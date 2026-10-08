import { createFileRoute } from '@tanstack/react-router';
import { Reports } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/reports_/$reportId')({
  head: () => vulnexaHead('Analysis Report'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() { const params = Route.useParams(); return <Reports reportId={params.reportId}/>; }
