import { createFileRoute } from '@tanstack/react-router';
import { Review } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/review')({
  head: () => cgvaHead('Review Queue'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <Review/>; }
