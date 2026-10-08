import { createFileRoute } from '@tanstack/react-router';
import { SettingsScreen } from '@/components/vulnexa/screens';
import { workspaceQuery, vulnexaHead } from '@/lib/vulnexa/api';
export const Route = createFileRoute('/settings')({
  head: () => vulnexaHead('Settings'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: Page,
});
function Page() {  return <SettingsScreen/>; }
