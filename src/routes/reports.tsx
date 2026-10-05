import { createFileRoute } from '@tanstack/react-router';
import { Reports } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/reports')({
  head: () => cgvaHead('Reports'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <Reports/>; }
