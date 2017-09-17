const APIV1 = '/api/v1'
const APIV2 = '/api/v2'
const APIV3 = 'http://www.izaiqi.com/ywy-manage'

module.exports = {
  name: 'CRM',
  prefix: 'CRM管理平台',
  footerText: '一万亿  © 2017',
  // logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  APIV3,
  api: {
    userLogin: `${APIV1}/user/login`,
    USER_LOGIN: `${APIV3}/auth/logon/byPwd`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    menus: `${APIV1}/menus`,
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
    GET_CRMACCMANAG: `${APIV3}/customer/list/get`,
    //GET_CRMACCMANAG: `${APIV1}/crmaccmanag`,
    UPDATA_CRMACCMANAG: `${APIV1}/crmaccmanag/:customerId`,
    clue: `${APIV1}/clue`,
    //crmaccmanag: `${APIV3}/customer/list/get`,
    account: `${APIV3}/account/list`,
    //account: `${APIV1}/account`,
  },
}