import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useRef, useState } from "react";
import type { Todo } from ".";

export default function AutoAnimatePage() {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const [parent] = useAutoAnimate();
  const [parent2] = useAutoAnimate();
  const [showMore, setShowMore] = useState(false);

  const removeIdx = (idx: number) => {
    setTodo((old) => [...old.filter((t) => t.id !== idx)]);
  };

  const randomize = () => {
    setTodo((old) => [...old.sort(() => (Math.random() > 0.5 ? -1 : 1))]);
  };

  return (
    <div className="flex flex-1 flex-col items-center gap-3">
      <div className="flex flex-col gap-2">
        <form className="flex gap-3">
          <input
            key={todo.length}
            type="text"
            className="input-bordered input"
            placeholder="todo"
            ref={inputRef}
          />
          <button
            type="submit"
            className="btn-ghost btn"
            onClick={(e) => {
              e.preventDefault();
              setTodo((old) => {
                if (inputRef.current) {
                  const next = (old[old.length - 1]?.id ?? 0) + 1;
                  return [
                    ...old,
                    {
                      id: next,
                      content: inputRef.current?.value,
                    },
                  ];
                }
                return old;
              });
            }}
          >
            Add
          </button>
        </form>
        <button onClick={() => randomize()} className="btn-ghost btn">
          Randomize
        </button>
      </div>

      <div className="flex gap-10">
        <div className="flex gap-10">
          <div
            className="flex h-[600px] w-min w-[400px] flex-col gap-2 overflow-auto rounded-xl bg-sky-700 p-6"
            ref={parent}
          >
            {todo.map((t) => {
              return (
                <div
                  key={t.id}
                  className="rounded bg-base-200 p-4"
                  onClick={() => removeIdx(t.id)}
                >
                  {t.content}
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-min w-[300px] bg-base-200 p-4" ref={parent2}>
          <div>hello world!</div>
          <button
            className="btn-ghost btn-sm btn"
            onClick={() => setShowMore((old) => !old)}
          >
            {!showMore ? "Show more" : "Hide"}
          </button>
          {showMore && (
            <div className="w-[200px] whitespace-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
