type ContainerTypes = {
    children: Object;
    isFinished: boolean;
    animationDuration: number;
}
export const Container = ({animationDuration, children, isFinished}: ContainerTypes) => {
    return (
        <div className="pointer-events-none" style={{opacity: isFinished ? 0 : 1, transition: `opacity ${animationDuration}ms linear`}}>
            {children}
        </div>
    )
}