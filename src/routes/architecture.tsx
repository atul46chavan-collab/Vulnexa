import { createFileRoute } from '@tanstack/react-router';
import { Architecture } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/architecture')({
  head: () => vulnexaHead('Pipeline Architecture'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <Architecture/>; }
