import { createFileRoute } from '@tanstack/react-router';
import { Sessions } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/sessions')({
  head: () => cgvaHead('Analysis Sessions'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <Sessions/>; }
