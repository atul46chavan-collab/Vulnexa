import { createFileRoute } from '@tanstack/react-router';
import { Projects } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/projects_/$projectId')({
  head: () => vulnexaHead('Project Details'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() { const params = Route.useParams(); return <Projects projectId={params.projectId}/>; }
