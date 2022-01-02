class Photo {
  constructor(imagePath) {
    this.imagePath = imagePath
  }
}
let PhotoRawList = [
  { imagePath: 'https://via.placeholder.com/150/0000FF/808080?text=A' },
  { imagePath: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=B' },
  { imagePath: 'https://via.placeholder.com/150/FFFF00/000000?text=C' },
  { imagePath: 'https://via.placeholder.com/150/000000/FFFFFF/?text=D' },
]
let PhotoList = []
PhotoRawList.map(item => {
  const photo = new Photo(item.imagePath)
  PhotoList.push(photo)
})
class PhotoTool {
  constructor() {
    this.photoQueue = []
  }
  isEmpty() {
    return this.photoQueue.length === 0
  }
  addToQueue(imagePath) {
    const photo = PhotoList.find(item => item.imagePath === imagePath)
    this.photoQueue.unshift(photo)
  }
  removeFromQueue(imagePath) {
    this.photoQueue = this.photoQueue.filter(item => item.imagePath !== imagePath)
  }
}

let PhotoToolInstance = new PhotoTool()

function imageProcess(imagePath, callback=() => {}) {
  PhotoToolInstance.addToQueue(imagePath)
  setTimeout(() => {
    PhotoToolInstance.removeFromQueue(imagePath)
  }, 5000)
}