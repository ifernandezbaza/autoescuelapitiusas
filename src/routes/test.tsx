import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { drawTest, type TestQuestion } from "@/data/test-questions";
import { Shell } from "@/components/shell";
import { verdict } from "@/lib/quiz";

export const Route = createFileRoute("/test")({ component: TestPage });

function TestPage() {
  const [round, setRound] = useState<TestQuestion[] | null>(null);
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<Array<number | null>>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const next = drawTest();
    setRound(next);
    setPicks(next.map(() => null));
  }, []);

  const total = round?.length ?? 0;
  const score = useMemo(
    () => (round ?? []).reduce<number>((acc, q, i) => acc + (picks[i] === q.correct ? 1 : 0), 0),
    [picks, round],
  );

  function choose(option: number) {
    setPicks((prev) => prev.map((value, i) => (i === step ? option : value)));
  }

  function restart() {
    const next = drawTest();
    setRound(next);
    setPicks(next.map(() => null));
    setStep(0);
    setDone(false);
  }

  const current = round?.[step];

  return (
    <Shell>
      <section className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <p className="text-xs font-semibold tracking-[0.22em] text-mute uppercase">Test de calentamiento</p>
        <h1 className="mt-3 font-display text-5xl leading-[0.9] font-extrabold tracking-tight sm:text-6xl">
          Ocho de la teórica. Sin trampa y sin registro.
        </h1>
        <p className="mt-4 max-w-xl text-ink/75">
          Preguntas propias, basadas en el reglamento. No son el examen oficial de la DGT: sirven para ver si
          vas de farol.
        </p>

        {done && round ? (
          <Result score={score} picks={picks} round={round} onRestart={restart} />
        ) : current ? (
          <article className="mt-10">
            <div className="flex items-end justify-between gap-4">
              <p className="font-display text-sm font-extrabold tracking-widest text-mute tabular-nums">
                {String(step + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </p>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/10" aria-hidden>
                <div
                  className="h-full bg-ink transition-all duration-200"
                  style={{ width: `${((step + (picks[step] !== null ? 1 : 0)) / total) * 100}%` }}
                />
              </div>
            </div>
            <h2 className="mt-6 font-display text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
              {current.question}
            </h2>
            <ul className="mt-6 grid gap-3">
              {current.options.map((option, index) => {
                const selected = picks[step] === index;
                return (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => choose(index)}
                      className={`flex w-full items-start gap-3 rounded-lg border px-4 py-4 text-left ${
                        selected ? "border-ink bg-ink text-bone" : "border-ink/15 bg-paper hover:border-ink/40"
                      }`}
                    >
                      <span className="font-display font-extrabold tabular-nums">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <button
                type="button"
                className="h-12 rounded-md border border-ink/15 px-5 font-semibold disabled:opacity-40"
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
              >
                Anterior
              </button>
              {step < total - 1 ? (
                <button
                  type="button"
                  className="h-12 rounded-md bg-ink px-5 font-semibold text-bone disabled:opacity-40"
                  disabled={picks[step] === null}
                  onClick={() => setStep((s) => s + 1)}
                >
                  Siguiente
                </button>
              ) : (
                <button
                  type="button"
                  className="h-12 rounded-md bg-acid px-5 font-semibold text-ink disabled:opacity-40"
                  disabled={picks[step] === null}
                  onClick={() => setDone(true)}
                >
                  Ver resultado
                </button>
              )}
            </div>
          </article>
        ) : null}
      </section>
    </Shell>
  );
}

function Result({
  score,
  picks,
  round,
  onRestart,
}: {
  score: number;
  picks: Array<number | null>;
  round: TestQuestion[];
  onRestart: () => void;
}) {
  const copy = verdict(score, round.length);
  return (
    <div className="mt-10">
      <p className="font-display text-8xl leading-none font-extrabold tracking-tight tabular-nums">
        {score}
        <span className="text-mute">/{round.length}</span>
      </p>
      <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight">{copy.title}</h2>
      <p className="mt-3 max-w-xl text-ink/75">{copy.text}</p>
      <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
        {round.map((q, i) => {
          const pick = picks[i];
          const ok = pick === q.correct;
          return (
            <li key={q.id} className="py-4">
              <p className="text-sm font-semibold">
                <span className={ok ? "text-ink" : "text-mute"}>{ok ? "Bien" : "Mal"} · </span>
                {q.question}
              </p>
              {!ok ? (
                <p className="mt-1 text-sm text-ink/75">
                  Era: {q.options[q.correct]}.{q.why ? ` ${q.why}` : ""}
                </p>
              ) : q.why ? (
                <p className="mt-1 text-sm text-mute">{q.why}</p>
              ) : null}
            </li>
          );
        })}
      </ul>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={onRestart} className="h-12 rounded-md border border-ink/20 px-5 font-semibold">
          Repetir
        </button>
        <Link
          to="/reserva"
          className="inline-flex h-12 items-center justify-center rounded-md bg-ink px-5 font-semibold text-bone"
        >
          Quiero la plaza
        </Link>
      </div>
    </div>
  );
}
