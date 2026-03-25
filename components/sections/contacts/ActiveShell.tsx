"use client";
import React, { useState, useRef, useEffect } from "react";

const TYPING_SPEED_MS = 12;

const TypedOutput = ({
  text,
  onTick,
  onComplete
}: {
  text: string;
  onTick: () => void;
  onComplete?: () => void;
}) => {
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    if (visibleLength < text.length) {
      const timeoutId = setTimeout(() => {
        setVisibleLength((prev) => Math.min(prev + (text.length > 50 ? 2 : 1), text.length));
        onTick();
      }, TYPING_SPEED_MS);
      return () => clearTimeout(timeoutId);
    }
  }, [visibleLength, text, onTick]);

  useEffect(() => {
    if (visibleLength >= text.length && onComplete) {
      onComplete();
    }
  }, [visibleLength, text.length, onComplete]);

  return (
    <pre className="font-mono text-sm md:text-base whitespace-pre-wrap break-words text-accent-olive">
      {text.substring(0, visibleLength)}
    </pre>
  );
};

type CommandRecord = {
  id: number;
  command: string;
  output: string;
};

export function ActiveShell() {
  const [history, setHistory] = useState<CommandRecord[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const focusInput = () => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  useEffect(() => {
    if (!isTyping) {
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
      setTimeout(() => {
        scrollToBottom();
      }, 10);
    }
  }, [isTyping]);

  const scrollToBottom = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const trimmed = input.trim();

      if (trimmed.toLowerCase() === "clear") {
        setHistory([]);
        setInput("");
        setIsTyping(false);
        return;
      }

      let outputText = "";
      if (trimmed !== "") {
        if (trimmed.toLowerCase() === "help") {
          outputText = "Comandi disponibili: help, clear, whoami";
        } else if (trimmed.toLowerCase() === "whoami") {
          outputText = "Guest User";
        } else {
          outputText = `Command not found: ${trimmed}`;
        }

        setIsTyping(true);
        setHistory((prev) => [
          ...prev,
          {
            id: Date.now(),
            command: trimmed,
            output: outputText,
          },
        ]);
      }

      setInput("");
      scrollToBottom();
    }
  };

  return (
    <div
      ref={terminalBodyRef}
      className="flex h-full w-full flex-col overflow-y-auto no-scrollbar scroll-smooth bg-black p-6 font-mono text-sm md:text-base text-accent-olive/80 cursor-text"
      onClick={focusInput}
    >
      <div className="mb-4 space-y-1 select-none">
        <p className="text-primary font-bold">Welcome to Portfolio System Shell [v0.1]</p>
        <p>Digitare 'help' per simulazione comandi.</p>
        <p className="opacity-50">--------------------------------------------------</p>
      </div>

      <div className="flex-1 space-y-2">
        {history.map((record, index) => (
          <div key={record.id} className="space-y-1">
            <div className="flex items-center select-none">
              <span className="mr-2 font-bold text-primary">manu.lionetti@portfolio:~$</span>
              <span className="text-primary">{record.command}</span>
            </div>
            {record.output && (
              <TypedOutput
                text={record.output}
                onTick={scrollToBottom}
                onComplete={index === history.length - 1 ? () => setIsTyping(false) : undefined}
              />
            )}
          </div>
        ))}

        {!isTyping && (
          <div className="flex items-center select-none">
            <span className="mr-2 font-bold text-primary">manu.lionetti@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent font-mono text-primary outline-none border-none focus:ring-0"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        )}
        <div className="h-4" /> {/* Ancora padding bottom */}
      </div>
    </div>
  );
}

export default ActiveShell;
