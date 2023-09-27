import TodoList from "./TodoList";

export default function TodOLayout({children} : {children : React.ReactNode}) {
  return (
    <div className="flex">
        <div><TodoList/></div>
        <div className="flex-1">{children}</div>
    </div>
  )
}
