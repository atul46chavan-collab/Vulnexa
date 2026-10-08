import { createFileRoute } from '@tanstack/react-router';
import { Sessions } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/sessions')({
  head: () => vulnexaHead('Analysis Sessions'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <Sessions/>; }
