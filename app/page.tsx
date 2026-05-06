"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [cards, setCards] = useState([
    { id: 1, title: "Flight Update", body: "Berlin flight delayed 47 min. Dashboard auto-adjusted route." }
  ]);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = () => {
    if (!input) return;
    setResponse("Thinking…");
    // Fake AI response for now
    setTimeout(() => {
      setResponse(`Got it: ${input}. Added to your graph.`);
      setInput("");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <Card className="bg-zinc-900 border-zinc-700 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <span className="text-emerald-400">●</span>
              LifeUI
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {cards.map(card => (
              <div key={card.id}>
                <p className="text-zinc-400 text-sm">{card.title}</p>
                <p className="mt-2 text-lg leading-relaxed">{card.body}</p>
              </div>
            ))}
            {response && <p className="text-emerald-400 text-sm mt-4">{response}</p>}
          </CardContent>
        </Card>

        <div className="mt-8 flex gap-3">
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-zinc-900 border-zinc-700"
            placeholder="Ask anything about your life..."
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  );
}