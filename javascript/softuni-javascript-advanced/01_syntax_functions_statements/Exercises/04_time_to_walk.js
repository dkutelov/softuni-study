function solve(steps, footLength, speed) {
    const distanceMeters = steps * footLength
    const breaksNumber = Math.floor(distanceMeters / 500)
    let walkTime = (distanceMeters / 1000) / speed * 3600 + breaksNumber * 60

    const hours = Math.floor(walkTime / 3600)
    walkTime -= hours * 3600
    const minutes = Math.floor( walkTime / 60)
    walkTime -= minutes * 60
    const seconds = walkTime.toFixed()
    console.log(`${addZeros(hours)}:${addZeros(minutes)}:${addZeros(seconds)}`)

    function addZeros(x) {
        return String(x).padStart(2, '0')
    }
}


solve(4000, 0.60, 5)
solve(2564, 0.70, 5.5)