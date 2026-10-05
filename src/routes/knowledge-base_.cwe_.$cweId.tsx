import { createFileRoute } from '@tanstack/react-router';
import { KnowledgeBase } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/knowledge-base/cwe/$cweId')({
  head: () => cgvaHead('CWE Specification'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() { const params = Route.useParams(); return <KnowledgeBase cweId={params.cweId}/>; }
