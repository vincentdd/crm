const APIV1 = '/api/v1'
const APIV2 = '/api/v2'
const APIV3 = 'http://www.izaiqi.com/ywy-manage'
const APIV4 = 'http://jia100.net:8085/manage'
const CRMAPI = 'http://jia100.net:8085/ywy-crm'

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
  APIV4,
  CRMAPI,
  api: {
    userLogin: `${APIV1}/user/login`,
    USER_LOGIN: `${APIV4}/auth/logon/byPwd`,
    userLogin: `${APIV4}/auth/logon/byPwd`,
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
    GET_INDUSTRY: `${APIV1}/industry`,
    GET_CRMACCMANAG: `${APIV4}/customer/list/get`,
    //GET_CRMACCMANAG: `${APIV1}/crmaccmanag`,
    UPDATA_CRMACCMANAG: `${APIV4}/customer/save`,
    clue: `${APIV1}/clue`,
    //crmaccmanag: `${APIV3}/customer/list/get`,
    GET_ACCOUNT: `${APIV4}/account/list`,
    UPDATA_ACCOUNT: `${APIV4}/account/save`,
    //crm平台
    GET_CRM_ACCOUNT: `${CRMAPI}/account/list`,
    UPDATE_CRM_ACCOUNT: `${CRMAPI}/account/save`,
    UPDATE_CRM_ACCOUNT_STATUS: `${CRMAPI}/account/status/update`

    //account: `${APIV1}/account`,
  },
}
