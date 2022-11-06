import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { type NextPage } from "next";
import { useEffect, useRef, useState } from "react";

export type Todo = {
  id: number;
  content: string;
};

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const removeIdx = (idx: number) => {
    setTodo((old) => [...old.filter((t) => t.id !== idx)]);
  };

  return (
    <>
      <main className="flex flex-1 items-start justify-center">
        <div className="flex flex-col gap-5">
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
          <div className="flex gap-10">
            <motion.ol className="flex flex-col gap-2">
              <AnimatePresence mode="sync">
                {todo.map((val, idx) => {
                  return (
                    <TodoItem key={val.id} todo={val} removeIdx={removeIdx} />
                  );
                })}
              </AnimatePresence>
            </motion.ol>
            <AnimateSharedLayout>
              <div className="flex flex-col gap-4">
                <AnimatePresence>
                  {todo.map((t) => (
                    <motion.div
                      key={t.id}
                      onClick={() => removeIdx(t.id)}
                      className="bg-base-200 p-4 "
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {t.content}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </AnimateSharedLayout>
          </div>
        </div>
      </main>
    </>
  );
};

type TodoItemProps = {
  todo: Todo;
  removeIdx: (idx: number) => void;
};
const TodoItem = ({ todo, removeIdx }: TodoItemProps) => {
  return (
    <motion.li
      key={todo.id}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 2, -2, 0],
        x: [0, 1, -1, 0],
      }}
      exit={{ height: 0, padding: 0, margin: 0, opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex max-h-min flex-nowrap items-center justify-between rounded-xl bg-gradient-to-br from-sky-700 to-yellow-700 p-2"
    >
      <div className="whitespace-nowrap">
        {todo.id}: {todo.content}
      </div>
      <button
        className="btn-ghost btn-sm btn"
        onClick={(e) => {
          e.preventDefault();
          removeIdx(todo.id);
        }}
      >
        X
      </button>
    </motion.li>
  );
};

export default Home;
