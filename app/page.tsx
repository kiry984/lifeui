import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Single calm card */}
        <Card className="bg-zinc-900 border-zinc-700 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <span className="text-emerald-400">●</span>
              LifeUI
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-zinc-400 text-sm">Good morning, Mihai. Here’s what matters today:</p>
              <p className="mt-4 text-lg leading-relaxed">
                Your flight to Berlin is delayed 47 minutes. The logistics dashboard has auto-adjusted the route.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button className="flex-1">Acknowledge</Button>
              <Button variant="outline" className="flex-1">View details</Button>
            </div>
          </CardContent>
        </Card>

        {/* Bottom input bar */}
        <div className="mt-8 flex gap-3">
          <Input 
            className="flex-1 bg-zinc-900 border-zinc-700"
            placeholder="Ask anything about your life..."
          />
          <Button>Send</Button>
        </div>
      </div>
    </div>
  );
}