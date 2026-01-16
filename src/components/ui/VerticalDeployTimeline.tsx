import { motion } from "motion/react";

const VerticalDeployTimeline = () => {
    const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  return (
      <div className='w-full h-full relative'> 
          <motion.div
              initial={{ y: 0 }}
              animate={{ y: "-50%" }}
              transition={{
                  duration: 5, // Adjust based on your preference
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
              }}
              className='flex flex-col gap-4 w-full  h-[300px] overflow-hidden relative'
          >
              {/* Original items */}
              {items.map((item) => (
                  <Card key={item} />
              ))}

         
          </motion.div>
      
    </div>
  )
}

export default VerticalDeployTimeline




const Card = () => {
    return (
        <motion.div
        
            
            className=" px-16 py-4 bg-neutral-100 shadow-sm rounded-lg">
            ayush
        </motion.div>
    )
}
