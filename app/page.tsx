"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type CardType = { id: number; title: string; body: string };

export default function Home() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lifeui-cards");
    if (saved) setCards(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("lifeui-cards", JSON.stringify(cards));
  }, [cards]);

  const handleSend = () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setTimeout(() => {
      const newCard: CardType = {
        id: Date.now(),
        title: "New Insight",
        body: `Understood: "${input}". Added to your personal graph.`,
      };
      setCards(prev => [newCard, ...prev]);
      setInput("");
      setIsLoading(false);
    }, 900);
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
          <CardContent className="space-y-6 max-h-[420px] overflow-auto">
            {cards.map(card => (
              <div key={card.id} className="border-l-2 border-emerald-400 pl-4">
                <p className="text-zinc-400 text-sm">{card.title}</p>
                <p className="mt-1 text-lg leading-relaxed">{card.body}</p>
              </div>
            ))}
            {isLoading && <p className="text-emerald-400 text-sm">Thinking…</p>}
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
          <Button onClick={handleSend} disabled={isLoading}>Send</Button>
        </div>
      </div>
    </div>
  );
}