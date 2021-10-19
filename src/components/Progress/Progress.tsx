import { useNProgress } from "@tanem/react-nprogress";

import {Bar} from './Bar'
import {Container} from './Container'
type ProgressTypes = {
    isAnimating: boolean,
}
export const Progress = ({isAnimating}:ProgressTypes) => {
    const {animationDuration, isFinished, progress} = useNProgress({isAnimating})
    return(
        <Container animationDuration={animationDuration} isFinished={isFinished}>
            <Bar animationDuration={animationDuration} progress={progress}/>
        </Container>
    )
}