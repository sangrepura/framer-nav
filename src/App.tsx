import './index.css'
import { motion } from 'framer-motion'

const animation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 0.2 + i * 0.2
    return {
      pathLength: 2,
      opacity: 0.8,
      transition: {
        pathLength: { delay, type: 'Inertia', duration: 2 },
        opacity: { delay, duration: 0.1 },
      },
    }
  },
}

export default function App() {
  return (
    <div className="pl-20 mt-[-50px]">
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 1000 300"
        initial="hidden"
        animate="visible"
      >
        {/* J */}
        <motion.line
          x1="0"
          y1="50"
          x2="150"
          y2="50"
          stroke="purple"
          strokeWidth="50"
          variants={animation}
          custom={1}
        />
        <motion.line
          x1="100"
          y1="50"
          x2="100"
          y2="230"
          stroke="purple"
          strokeWidth="50"
          variants={animation}
          custom={1.5}
        />
        <motion.path
          d="M100,230 Q100,310 10,270"
          stroke="purple"
          strokeWidth="50"
          fill="none"
          variants={animation}
          custom={2}
        />
        {/* A */}
        <motion.line
          x1="200"
          y1="260"
          x2="250"
          y2="50"
          stroke="#00cc88"
          strokeWidth="50"
          variants={animation}
          custom={2.5}
        />
        <motion.line
          x1="250"
          y1="50"
          x2="300"
          y2="260"
          stroke="#00cc88"
          strokeWidth="50"
          variants={animation}
          custom={3}
        />
        <motion.line
          x1="225"
          y1="150"
          x2="275"
          y2="150"
          stroke="#00cc88"
          strokeWidth="50"
          variants={animation}
          custom={3.5}
        />
        {/* C */}
        <motion.path
          d="M480,150 A70,90 0 1,1 480,100"
          stroke="#0099ff"
          strokeWidth="50"
          fill="none"
          variants={animation}
          custom={4}
        />
        {/* K */}
        <motion.line
          x1="550"
          y1="50"
          x2="550"
          y2="290"
          stroke="#ff0055"
          strokeWidth="50"
          variants={animation}
          custom={4.5}
        />
        <motion.line
          x1="550"
          y1="200"
          x2="700"
          y2="30"
          stroke="#ff0055"
          strokeWidth="50"
          variants={animation}
          custom={5}
        />
        <motion.line
          x1="550"
          y1="150"
          x2="700"
          y2="260"
          stroke="#ff0055"
          strokeWidth="50"
          variants={animation}
          custom={5.5}
        />
      </motion.svg>
    </div>
  )
}
