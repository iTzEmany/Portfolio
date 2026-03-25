"use client";

import React, { useState, useRef, useEffect } from "react";
import { parseCommandText } from "@/lib/terminal-service";

type DiagnosticRecord = {
  id: number;
  command: string;
  output: string;
};

// Formattazione con Syntax Highlighting in tempo reale (stile Enterprise)
const formatTerminalOutput = (text: string) => {
  if (!text) return null;

  const tokens = text.split(/(\[\s*OK\s*\]|\[[A-Z_]+\]|itz_dev_node\.service|► LORE\.\w+|[A-Z_]+(?=\s*=)|[A-Z_]+(?=\s*:)|sysdiagnose:.*)/g);

  return tokens.map((part, i) => {
    if (!part) return null;
    if (part.match(/^\[\s*OK\s*\]$/)) return <span key={i} className="text-green-500 font-bold">{part}</span>;
    if (part.match(/^\[[A-Z_]+\]$/)) return <span key={i} className="text-accent-olive font-bold">{part}</span>;
    if (part.match(/^► LORE\.\w+$/)) return <span key={i} className="text-primary font-bold">{part}</span>;
    if (part === "itz_dev_node.service") return <span key={i} className="text-accent-olive font-bold">{part}</span>;
    if (part.match(/^[A-Z_]+$/)) return <span key={i} className="text-primary font-bold">{part}</span>;
    if (part.startsWith("sysdiagnose:")) return <span key={i} className="text-accent-rust">{part}</span>;

    // Default test body
    return <span key={i} className="text-accent-olive/80 leading-relaxed">{part}</span>;
  });
};

const TYPING_SPEED_MS = 12;

// Sub-componente per l'animazione di digitazione graduale
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
        // Possiamo aumentare i chars scritti in base alla grandezza del testo per dare ritmo
        setVisibleLength((prev) => Math.min(prev + (text.length > 50 ? 2 : 1), text.length));
        onTick(); // Forza l'auto-scroll ogni volta che il testo avanza
      }, TYPING_SPEED_MS);
      return () => clearTimeout(timeoutId);
    }
  }, [visibleLength, text, onTick]);

  useEffect(() => {
    if (visibleLength >= text.length && onComplete) {
      onComplete();
    }
  }, [visibleLength, text.length, onComplete]);

  const visibleText = text.substring(0, visibleLength);

  return (
    <pre className="font-mono text-xs md:text-sm whitespace-pre-wrap mt-2 mb-6 break-words">
      {formatTerminalOutput(visibleText)}
    </pre>
  );
};

export function EnvironmentTerminal() {
  const [history, setHistory] = useState<DiagnosticRecord[]>(() => {
    // Inizializza direttamente lo stato per evitare duplicazioni da React 18 StrictMode
    const outputText = parseCommandText("status");
    return [{ id: Date.now(), command: "status", output: outputText }];
  });
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const focusInput = () => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  useEffect(() => {
    // Focus automatico e scroll finale DOPO che smette di digitare e l'input riappare nel DOM
    if (!isTyping) {
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
      // Un micro-timeout assicura che il browser abbia calcolato la nuova scrollHeight con l'input visibile
      setTimeout(() => {
        scrollToBottom();
      }, 10);
    }
  }, [isTyping]);

  const scrollToBottom = () => {
    // Usa scrollTop invece di scrollIntoView per evitare l'hijacking dello scroll sul layout modale padre
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  };

  const handleCommand = (cmd: string, silent: boolean = false) => {
    const rawCmd = cmd.trim().toLowerCase();

    if (rawCmd === "clear") {
      setHistory([]);
      setInput("");
      setIsTyping(false); // Sblocca layout
      return;
    }

    const outputText = parseCommandText(cmd);

    if (cmd.trim() !== "" || !silent) {
      setIsTyping(true); // Nascondi l'input field durante l'emissione del testo
      setHistory((prev) => [
        ...prev,
        { id: Date.now(), command: rawCmd, output: outputText },
      ]);
    }

    setInput("");
    scrollToBottom();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <article
      onClick={focusInput}
      className="flex w-full min-h-[350px] lg:h-[450px] flex-col rounded-xl border border-accent-olive/30 bg-black overflow-hidden font-mono text-xs md:text-sm cursor-text shadow-[0_0_15px_rgba(78,104,81,0.1)] relative"
    >
      {/* Header Finestra Terminale Copiato dal ContactsLayout per coerenza visiva totale */}
      <header className="flex h-8 w-full items-center justify-between border-b border-accent-olive/30 bg-neutral-900/50 px-3 shrink-0">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-red-500/80" />
          <div className="size-3 rounded-full bg-yellow-500/80" />
          <div className="size-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[10px] md:text-xs text-accent-olive/60 font-semibold tracking-widest uppercase">
          manu.lionetti@sys.diagnostic:~$
        </div>
        <div className="w-10" /> {/* Spacer per centering */}
      </header>

      {/* Terminal Body */}
      <div
        ref={terminalBodyRef}
        className="flex-1 overflow-y-auto p-4 md:p-6 no-scrollbar scroll-smooth"
      >
        <div className="flex flex-col">
          {/* Messaggio Statico Introduttivo (Immutabile ai 'clear') */}
          <div className="mb-6 flex flex-col gap-1 text-foreground/50 select-none border-b border-border/30 pb-4">
            <span className="tracking-widest">EMANUELE_LIONETTI_SYS_DIAGNOSTICS v2.0</span>
            <span>Type <span className="text-primary font-bold">'help'</span> to see available commands.</span>
          </div>

          {history.map((record, index) => (
            <div key={record.id} className="flex flex-col w-full">
              {/* Riga del Comando Inviato */}
              <div className="flex items-center gap-2 select-none mb-1">
                <span className="text-primary font-bold">manu.lionetti@sys.diagnostic</span>
                <span className="text-foreground font-bold">:~#</span>
                <span className="text-accent-olive ml-1">{record.command}</span>
              </div>

              {/* Output Processato con Typewriter */}
              {record.output && (
                <TypedOutput
                  text={record.output}
                  onTick={scrollToBottom}
                  onComplete={index === history.length - 1 ? () => setIsTyping(false) : undefined}
                />
              )}
            </div>
          ))}
        </div>

        {/* Riga di Input Interattiva Attiva SOLO a Riposo */}
        {!isTyping && (
          <div className="flex items-center gap-2 mt-auto select-none pb-4 pt-2">
            <span className="text-primary font-bold whitespace-nowrap">manu.lionetti@sys.diagnostic</span>
            <span className="text-foreground font-bold whitespace-nowrap">:~#</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-accent-olive outline-none border-none focus:ring-0 ml-1 font-mono md:text-sm caret-foreground"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        )}

        {/* Ancora di padding finale */}
        <div className="h-4" />
      </div>
    </article>
  );
}
