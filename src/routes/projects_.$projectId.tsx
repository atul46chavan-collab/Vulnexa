import { createFileRoute } from '@tanstack/react-router';
import { Projects } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/projects/$projectId')({
  head: () => cgvaHead('Project Details'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() { const params = Route.useParams(); return <Projects projectId={params.projectId}/>; }
