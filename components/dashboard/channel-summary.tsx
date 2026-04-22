import { mockChannelSummary } from '@/lib/mocks/dashboard';

export function ChannelSummary() {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="min-w-full border-collapse bg-surface text-sm">
        <thead className="bg-canvas text-left text-muted">
          <tr>
            <th className="px-4 py-3 font-medium">Canal</th>
            <th className="px-4 py-3 font-medium">Receita semanal</th>
            <th className="px-4 py-3 font-medium">Conversão</th>
            <th className="px-4 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {mockChannelSummary.map((channel) => (
            <tr key={channel.channel} className="border-t border-border">
              <td className="px-4 py-3 text-text">{channel.channel}</td>
              <td className="px-4 py-3 text-text">{channel.revenue}</td>
              <td className="px-4 py-3 text-text">{channel.conversion}</td>
              <td className="px-4 py-3 text-muted">{channel.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
