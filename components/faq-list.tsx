type FAQListProps = {
  items: Array<{
    question: string;
    answer: string;
  }>;
};

export function FAQList({ items }: FAQListProps) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6 text-left shadow-soft transition-colors duration-300 open:border-accent/40 open:bg-white/[0.05]"
        >
          <summary className="cursor-pointer list-none font-display text-xl uppercase tracking-[0.08em] text-white">
            <span className="flex items-center justify-between gap-5">
              {item.question}
              <span className="text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
