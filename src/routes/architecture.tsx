import { createFileRoute } from '@tanstack/react-router';
import { Architecture } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/architecture')({
  head: () => cgvaHead('Pipeline Architecture'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <Architecture/>; }
