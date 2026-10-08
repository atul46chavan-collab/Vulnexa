import { createFileRoute } from '@tanstack/react-router';
import { KnowledgeBase } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/knowledge-base')({
  head: () => vulnexaHead('Knowledge Base'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <KnowledgeBase/>; }
