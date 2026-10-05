import { createFileRoute } from '@tanstack/react-router';
import { Documentation } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/documentation')({
  head: () => cgvaHead('Documentation'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <Documentation/>; }
