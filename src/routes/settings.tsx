import { createFileRoute } from '@tanstack/react-router';
import { SettingsScreen } from '@/components/cgva/screens';
import { workspaceQuery, cgvaHead } from '@/lib/cgva/api';
export const Route = createFileRoute('/settings')({
  head: () => cgvaHead('Settings'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <SettingsScreen/>; }
