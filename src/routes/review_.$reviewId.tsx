import { createFileRoute } from '@tanstack/react-router';
import { Review } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/review_/$reviewId')({
  head: () => vulnexaHead('Finding Review'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() { const params = Route.useParams(); return <Review reviewId={params.reviewId}/>; }
