
import { useState, useEffect } from "react";

export type AnimationStage = 'initial' | 'textFadeOut' | 'logoTransition';

interface LoginStagesProps {
  children: (stage: AnimationStage) => React.ReactNode;
}

const LoginStages = ({ children }: LoginStagesProps) => {
  const [stage, setStage] = useState<AnimationStage>('initial');

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('textFadeOut'), 3000);   // Text starts fading at 3s
    const timer2 = setTimeout(() => setStage('logoTransition'), 4000); // Logo moves AND form appears at 4s

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return <>{children(stage)}</>;
};

export default LoginStages;
