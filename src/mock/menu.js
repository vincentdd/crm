const {
  config
} = require('./common')

const {
  apiPrefix
} = config
let database = [{
  id: '1',
  icon: 'laptop',
  name: 'CRM账号管理',
  route: '/crmaccmanag',
}, {
  id: '2',
  bpid: '1',
  name: '员工管理',
  icon: 'user',
  route: '/account',
}, {
  id: '21',
  mpid: '-1',
  bpid: '2',
  name: 'User Detail',
  route: '/user/:id',
}, {
  id: '3',
  bpid: '1',
  name: '线索池',
  icon: 'api',
  route: '/clue',
}, {
  id: '4',
  bpid: '1',
  name: '员工',
  icon: 'camera-o',
}, {
  id: '5',
  bpid: '1',
  name: '线索请求管理',
  icon: 'code-o',
}, {
  id: '6',
  bpid: '1',
  name: '导入线索管理',
  icon: 'setting',
}, {
  id: '7',
  bpid: '1',
  name: '行业管理',
  icon: 'shopping-cart',
  route: '/post',
}, {
  id: '8',
  bpid: '1',
  name: 'user',
  icon: '',
  route: '/user',
}, ]

module.exports = {

  [`GET ${apiPrefix}/menus`](req, res) {
    res.status(200).json(database)
  },
}
