import { createFileRoute } from '@tanstack/react-router';
import { Projects } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/projects')({
  head: () => cgvaHead('Projects'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <Projects/>; }
