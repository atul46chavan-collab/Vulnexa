import { createFileRoute } from '@tanstack/react-router';
import { NewAnalysis } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/analysis_/new')({
  head: () => cgvaHead('New Analysis'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <NewAnalysis/>; }
