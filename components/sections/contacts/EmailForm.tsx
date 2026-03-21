"use client";

import React, { useState } from "react";
import { Mail, User, Paperclip, Send } from "lucide-react";

/**
 * EmailForm Component
 * Client Component che simula una vera mailbox o un client email retro.
 */
export function EmailForm() {
  const [formData, setFormData] = useState({
    subject: "",
    cc: "",
    attachments: null as FileList | null,
    body: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mock Email Data Submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, attachments: e.target.files }));
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex h-full w-full flex-col gap-4 rounded-md border border-accent-olive/30 bg-black p-6 shadow-inner font-mono relative overflow-hidden group/form"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-accent-olive/0 via-accent-olive/50 to-accent-olive/0 opacity-0 group-hover/form:opacity-100 transition-opacity duration-1000" />
      
      {/* Intestazione finta mailbox */}
      <div className="flex items-center gap-2 border-b border-accent-olive/20 pb-4 mb-2">
        <Mail className="h-5 w-5 text-accent-olive" />
        <span className="text-sm uppercase tracking-widest text-primary font-bold">Compose_Message</span>
      </div>

      {/* RIGA 1: Subject */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs uppercase text-accent-olive flex items-center gap-1.5 focus-within:text-primary transition-colors">
          Oggetto
        </label>
        <div className="relative flex items-center">
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/10 px-0 py-2 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
            placeholder="Re: Proposta di collaborazione..."
            required
          />
        </div>
      </div>

      {/* RIGA 2: CC / Mentions */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cc" className="text-xs uppercase text-accent-olive flex items-center gap-1.5 focus-within:text-primary transition-colors">
          <User className="h-3.5 w-3.5" />
          Cc / Mentions
        </label>
        <div className="relative flex items-center">
          <input
            id="cc"
            name="cc"
            type="text"
            value={formData.cc}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/10 px-0 py-2 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
            placeholder="Spara nomi, copia carbone..."
          />
        </div>
      </div>

      {/* RIGA 3: Attachments (File Input) */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="attachments" className="text-xs uppercase text-accent-olive flex items-center gap-1.5 focus-within:text-primary transition-colors cursor-pointer">
          <Paperclip className="h-3.5 w-3.5" />
          Allegati
        </label>
        <div className="relative flex items-center mt-1">
          <input
            id="attachments"
            name="attachments"
            type="file"
            multiple
            onChange={handleFileChange}
            className="block w-full text-xs text-foreground/50 file:mr-4 file:py-1.5 file:px-3 file:rounded file:border-0 file:bg-white/5 file:text-xs file:font-mono file:text-primary hover:file:bg-white/10 file:transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white/5 rounded-sm p-1"
          />
        </div>
      </div>

      {/* RIGA 4: Body */}
      <div className="flex flex-col gap-1.5 flex-1 mt-2">
        <label htmlFor="body" className="sr-only">
          Corpo del messaggio
        </label>
        <textarea
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
          className="w-full flex-1 resize-none bg-white/5 rounded border border-white/5 p-3 text-sm text-foreground focus:border-primary/50 focus:bg-white/10 focus:outline-none transition-colors scroll-smooth no-scrollbar"
          placeholder="> Scrivi qui il tuo protocollo di comunicazione..."
          required
        />
      </div>

      {/* SUBMIT BUTTON */}
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="group/emailbtn flex items-center gap-2 rounded border border-accent-olive bg-accent-olive/10 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-accent-olive transition-all hover:bg-accent-olive hover:text-black focus:outline-none focus:ring-2 focus:ring-accent-olive focus:ring-offset-2 focus:ring-offset-black"
        >
          <Send className="h-4 w-4 transition-transform group-hover/emailbtn:translate-x-1 group-hover/emailbtn:-translate-y-1 duration-200" />
          <span>INVIA_MESSAGGIO</span>
        </button>
      </div>

    </form>
  );
}

export default EmailForm;
