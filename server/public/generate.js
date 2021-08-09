let Nicks = [`Panda`, `Furer`, `Bear`, `Yahiko`, `Vendeta`];

module.exports = function (){
    let random = Math.floor(Math.random() * Nicks.length) - 1;
    return Nicks[random];
}