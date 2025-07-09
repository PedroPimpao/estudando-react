export default function Input(props){
    return(
        <input 
            className="border bor-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            // type={props.type}
            // value={props.value}
            // onChange={props.onChange}
            // placeholder={props.placeholder}
            {...props}
        />
    )
}