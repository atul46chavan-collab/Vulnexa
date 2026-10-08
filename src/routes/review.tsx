import { createFileRoute } from '@tanstack/react-router';
import { Review } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/review')({
  head: () => vulnexaHead('Review Queue'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <Review/>; }
