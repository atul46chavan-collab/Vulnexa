import { createFileRoute } from '@tanstack/react-router';
import { Projects } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/projects')({
  head: () => vulnexaHead('Projects'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <Projects/>; }
