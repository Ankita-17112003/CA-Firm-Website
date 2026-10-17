import { Loader2 } from 'lucide-react';

export default function LoadingState({ label = 'Loading' }) {
  return (
    <div role="status" className="flex min-h-[40vh] items-center justify-center gap-3 text-charcoal/70">
      <Loader2 className="size-5 animate-spin" aria-hidden="true" />
      <span className="text-sm">{label}</span>
    </div>
  );
}
