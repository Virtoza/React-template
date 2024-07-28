import Icon from "../core/helper/Icon";
import s from "../core/srtylesheet/components/Root.component.module.css";
import useCounter from "../stores/count.store.ts";
export default function Root(): React.ReactElement {
  const { add, count, decrement } = useCounter();
  return (
    <>
      <div className={s.wrapper}>
        <p>Hello React.dev</p>
        <Icon name="Anchor" color="green" size={32} strokeWidth={1} />
        <button onClick={() => add()}>Add</button>
        <p>{count}</p>
        <button onClick={() => decrement()}>Remove</button>
      </div>
    </>
  );
}
