"use client";
import { Typewriter } from "react-simple-typewriter";

function TypewriterMain({
  words,
  loop,
  cursor,
  cursorBlinking,
  cursorStyle,
  delaySpeed,
}: {
  words: string[];
  loop?: boolean;
  cursor?: boolean;
  cursorBlinking?: boolean;
  cursorStyle?: string;
  delaySpeed?: number;
}) {
  return (
    <Typewriter
      words={words}
      loop={loop}
      cursor={cursor}
      cursorBlinking={cursorBlinking}
      cursorStyle={cursorStyle}
      delaySpeed={delaySpeed}
    />
  );
}

export default TypewriterMain;
