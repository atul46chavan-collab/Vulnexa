import { createFileRoute } from '@tanstack/react-router';
import { Documentation } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/documentation')({
  head: () => vulnexaHead('Documentation'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <Documentation/>; }
