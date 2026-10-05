import { createFileRoute } from '@tanstack/react-router';
import { Review } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/review/$reviewId')({
  head: () => cgvaHead('Finding Review'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() { const params = Route.useParams(); return <Review reviewId={params.reviewId}/>; }
