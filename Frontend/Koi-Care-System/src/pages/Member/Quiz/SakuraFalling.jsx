import { useEffect } from 'react'

const SakuraFalling = () => {
  useEffect(() => {
    const createSakura = () => {
      const sakura = document.createElement('div')
      sakura.classList.add('sakura')
      sakura.innerHTML = '🌸' // Thay thế hình tròn bằng emoji hoa
      document.body.appendChild(sakura)

      // Vị trí ngẫu nhiên trên màn hình
      sakura.style.left = Math.random() * window.innerWidth + 'px'

      // Thời gian rơi ngẫu nhiên
      sakura.style.animationDuration = Math.random() * 3 + 3 + 's'

      // Kích thước ngẫu nhiên
      const size = Math.random() * 20 + 10 + 'px'
      sakura.style.fontSize = size

      // Xóa khi rơi xong
      setTimeout(() => {
        sakura.remove()
      }, 5000)
    }

    const interval = setInterval(createSakura, 300)

    return () => clearInterval(interval)
  }, [])

  return null
}

export default SakuraFalling
