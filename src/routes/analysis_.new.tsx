import { createFileRoute } from '@tanstack/react-router';
import { NewAnalysis } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/analysis_/new')({
  head: () => vulnexaHead('New Analysis'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <NewAnalysis/>; }
