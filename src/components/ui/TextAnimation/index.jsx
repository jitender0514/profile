import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import RandomTextAnimation from './RandomTextAnimation';
import CursorBlinker from './CursorBlink';
// import CursorBlinker from './cursor-blinker'

// eslint-disable-next-line react/prop-types
export default function TextAnimation({delay, baseText}) {
  const [done, setDone] = useState(false)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) =>
    // eslint-disable-next-line react/prop-types
    baseText.slice(0, latest)
  )

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const controls = animate(count, baseText.length, {
      type: 'tween',
      delay: delay,
      duration: 1,
      ease: 'easeInOut',
      onComplete: () => {
        setDone(true)
      },
    })
    return controls.stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <span className="text-[2rem] lg:text-[3rem] h-32 max-w-92 font-extrabold mb-10 text-start">
      <motion.span>{displayText}</motion.span>
      {done && (
        <>
          <br />
        </>
      )}
      <RandomTextAnimation delay={delay + 1} />
      <CursorBlinker />
    </span>
  )
}
