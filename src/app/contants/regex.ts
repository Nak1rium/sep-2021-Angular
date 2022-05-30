export const RegEx = {
  username: new RegExp('^[a-z][a-z\d]{1,19}$'),
  password: new RegExp(/^[а-яА-яЁіІїЇ\s]{2,20}$/),
  model: new RegExp('^[a-zA-Za-яА-яёЁіІїЇ]{1,20}$')
}
