import { createFileRoute } from '@tanstack/react-router';
import { KnowledgeBase } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/knowledge-base_/specifications')({
  head: () => cgvaHead('Security Specifications'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <KnowledgeBase specifications/>; }
