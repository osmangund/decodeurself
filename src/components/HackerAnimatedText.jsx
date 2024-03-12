"use client"

import { useEffect } from "react"

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function hackerAnimation() {
  let iterations = 0
  const hackerTexts = document.querySelectorAll("[data-anim='hacker']")

  setTimeout(() => {
    const hackerAnimInterval = setInterval(() => {
      hackerTexts.forEach((text) => {
        hackerEffect(text, iterations)
      })
      if (iterations >= 9) clearInterval(hackerAnimInterval)

      iterations += 1 / 4
    }, 30)
  }, 500)
  function hackerEffect(text) {
    text.innerHTML = text.innerHTML
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          console.log(text)
          return text.dataset.value[index]
        }
        return alphabet[Math.floor(Math.random() * alphabet.length)]
      })
      .join("")
  }
}

export default function HackerAnimatedText() {
  useEffect(() => {}, [])

  return (
    <p data-anim="hacker" data-value="Animationtest" className="word">
      Animationtest
    </p>
  )
}
