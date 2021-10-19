type BarTypes = {
    animationDuration: number;
    progress: number;
}
export const Bar = ({animationDuration, progress}: BarTypes) => {
    return (
        <div className="bg-indigo-400 h-1.5 w-full left-0 top-0 fixed z-50" style={{marginLeft: `${(-1 + progress) * 100}%`, transition: `margin-left ${animationDuration}ms linear`}}>

        </div>
    )
} 