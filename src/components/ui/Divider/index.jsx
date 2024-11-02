import { motion } from 'framer-motion'
import { themeClassMap } from '../../../lib/data'

const Divider = () => {
  return (
    <motion.div
      className={` ${themeClassMap.dividerBg} w-full h-1 `}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    />
  )
}

export default Divider