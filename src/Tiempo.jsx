export function Tiempo (player) {
  setInterval(() => {
    const local_time = Math.floor(player.currentTime);
    if (local_time !== 0) {
      console.log(local_time)
    }
    return local_time;
  }, 10000);
}