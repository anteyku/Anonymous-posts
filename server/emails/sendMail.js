let keys = require(`../keys/key`);

module.exports = function (email, token){
    return {
        form: keys.email,
        to: email,
        subject: `Подтверждения аакаунта.`,
        html: `
      <h1>Вы зарегистрировали аккаунт на ресурсе</h1>
      <p>Теперь вам нужно активировать его перейдя по ссылке</p>
      <a href="${keys.url}/registration/${token}/accept">Активировать аккаунт</a>
    `
    }
}