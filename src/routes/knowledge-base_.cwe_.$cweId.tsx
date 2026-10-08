import { createFileRoute } from '@tanstack/react-router';
import { KnowledgeBase } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/knowledge-base_/cwe_/$cweId')({
  head: () => vulnexaHead('CWE Specification'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() { const params = Route.useParams(); return <KnowledgeBase cweId={params.cweId}/>; }
