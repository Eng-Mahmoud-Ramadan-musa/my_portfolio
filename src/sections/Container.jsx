

export default function Container(props) {
  return (
    <div id={props.id} className=" relative flex flex-col-reverse sm:flex-row gap-10 justify-between text-5xl items-center h-auto bg-[#073b4c33] font-bold border rounded-xl border-solid border-black overflow-hidden p-5 " style={props.style}>
        {props.children}
    </div>
  )
}
