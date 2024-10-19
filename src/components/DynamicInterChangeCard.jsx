

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"


// Define grid positions for the card layout
const gridPositions = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 },
]

// Images array for the cards
const images = [
  "https://autogpt.net/wp-content/uploads/2024/06/Screenshot-2024-06-19-at-18.59.07-768x415.jpg",
  "https://miro.medium.com/v2/resize:fit:1400/1*XH8A_7ilH56XTnrjtIym7A.png",
  "https://miro.medium.com/v2/resize:fit:1000/1*TdJTgbm0K9Fv7C3Omk1nzQ.jpeg",
  "https://www.device42.com/blog/wp-content/uploads/2023/03/14_01edge-cloud-computing-900x600.jpg",
]

export default function DynamicInterChangeCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cards = [1, 2, 3, 4]
  const controls = useAnimation()

  useEffect(() => {
    const moveCards = async () => {
      await controls.start((i) => ({
        x: gridPositions[(i - currentIndex + 4) % 4].x * 200,
        y: gridPositions[(i - currentIndex + 4) % 4].y * 200,
        transition: {
          duration: 2.5,
          ease: [0.43, 0.13, 0.23, 0.96], // Custom easing function for smooth motion
        },
      }))
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4)
    }

    const intervalId = setInterval(moveCards, 3000) // Move cards every 3 seconds

    return () => clearInterval(intervalId)
  }, [currentIndex, controls])

  return (
    <div className="container">
      <div className="card-container">
        {cards.map((card, index) => (
          <motion.div
            key={card}
            custom={index}
            animate={controls}
            initial={{
              x: gridPositions[index].x * 200,
              y: gridPositions[index].y * 200,
            }}
            className="card"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img
                src={images[index]} // Use images from the array
                alt={`Card ${card}`}
                className="card-image"
                width={180}
                height={140}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
