const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
host: '51.161.33.187',
port: 25565,
username: 'Camera_Max',
})


function lookatNearestPlayer(){
    const playerfilter = (entity) => entity.type ==='player'
    const playerEntity = bot.nearestEntity(playerfilter)

    if (!playerEntity) return
        const pos = playerEntity.position.offset(0, playerEntity.height, 0)
        bot.lookAt(pos)
}
bot.on('physicTick', lookatNearestPlayer)