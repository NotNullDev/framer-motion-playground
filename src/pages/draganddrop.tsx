import { motion, Reorder, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

type Item = {
  id: number;
  name: string;
};

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event
export default function A() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const currentDrag = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      name: "Item 1",
    },
    {
      id: 2,
      name: "Item 2",
    },
    {
      id: 3,
      name: "Item 3",
    },
  ]);

  useEffect(() => {
    if (isInView) {
      toast("im in view!");
    } else {
      toast("im out!!!");
    }
  }, [isInView]);

  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="flex gap-40">
        <Reorder.Group
          values={items}
          onReorder={setItems}
          className="flex flex-col gap-2"
          axis="y"
        >
          {items.map((item) => {
            return (
              <Reorder.Item
                key={item.id}
                value={item}
                className="flex gap-2 rounded-xl bg-base-200 p-3 shadow shadow-indigo-600"
              >
                <div>{item.id}: </div>
                <div>{item.name}</div>
              </Reorder.Item>
            );
          })}
        </Reorder.Group>
        <motion.div
          drag
          draggable
          onDragCapture={(e) => {
            toast("hmm...");
          }}
          onDragEnter={() => {
            toast("drag over");
          }}
          // dragConstraints={{ top: 100, left: 100, right: 100, bottom: 100 }}
          onDragEnd={(e) => {
            toast("drag end!");
            console.log(e);
          }}
          ref={ref}
          onDragStart={(e) => {
            if (e.currentTarget) currentDrag.current = e.currentTarget;
            toast("drag start");
          }}
        >
          <button className="sm glass btn"> Im free!</button>
        </motion.div>

        <div className="flex gap-10">
          <motion.div
            onDragOver={(e) => {
              e.preventDefault();
            }}
            onDragEnter={() => {
              toast("drag over");
            }}
            onDrop={(e) => {
              toast("drop!");
              console.log("drop");
              console.dir(e);
              console.log("saved current drag:");
              console.dir(currentDrag.current);
              if (currentDrag.current) {
                currentDrag.current.parentNode?.removeChild(
                  currentDrag.current
                );
                e.currentTarget.appendChild(currentDrag.current);
              }
            }}
            className="flex h-[300px] w-[300px] flex-col gap-3 bg-base-200 py-2"
          >
            <div
              draggable
              className="mx-auto w-3/4 cursor-pointer rounded-xl bg-base-100 p-2 "
              onDragStart={(e) => {
                if (e.currentTarget) currentDrag.current = e.currentTarget;
                toast("drag start");
              }}
            >
              Item 1
            </div>
            <div
              draggable
              className="mx-auto w-3/4 cursor-pointer rounded-xl bg-base-100 p-2 "
              onDragStart={(e) => {
                if (e.currentTarget) currentDrag.current = e.currentTarget;
                toast("drag start");
              }}
            >
              Item 2
            </div>
            <div
              draggable
              className="mx-auto w-3/4 cursor-pointer rounded-xl bg-base-100 p-2 "
              onDragStart={(e) => {
                if (e.currentTarget) currentDrag.current = e.currentTarget;
                toast("drag start");
              }}
            >
              Item 3
            </div>
          </motion.div>

          <motion.div
            onDragOver={(e) => {
              e.preventDefault();
            }}
            onDragEnter={(e) => {
              e.preventDefault();
              toast("drag over");
              console.log("drag over");
              console.dir(e);
            }}
            onDrop={(e) => {
              toast("drop!");
              console.log("drop");
              console.dir(e);
              console.log("saved current drag:");
              console.dir(currentDrag.current);
              if (currentDrag.current) {
                currentDrag.current.parentNode?.removeChild(
                  currentDrag.current
                );
                e.currentTarget.appendChild(currentDrag.current);
              }
            }}
            dragListener
            className="flex h-[300px] w-[300px] flex-col gap-3 bg-base-200 py-2"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

const ATable = () => {
  return (
    <table className="table">
      <thead className="table-header-group">
        <th>Header 1</th>
        <th>Header 2</th>
        <th></th>
      </thead>
      <tbody>
        <tr className="table-row">
          <td>Val1</td>
          <td>Val2</td>
          <td>
            <button className="btn-primary btn-sm btn">;o</button>
          </td>
        </tr>
        <tr>
          <td>Val1</td>
          <td>Val2</td>
          <td>
            <button className="btn-primary btn-sm btn">;o</button>
          </td>
        </tr>
        <tr>
          <td>Val1</td>
          <td>Val2</td>
          <td>
            <button className="btn-primary btn-sm btn">;o</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
