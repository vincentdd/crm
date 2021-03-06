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
    //GET_CRMACCMANAG: `${APIV1}/crmaccmanag`,
    clue: `${APIV1}/clue`,
    //crmaccmanag: `${APIV3}/customer/list/get`,
    //管理平台
    GET_INDUSTRY: `${APIV4}/industry/get`,
    GET_CRMACCMANAG: `${APIV4}/customer/list/get`,
    UPDATA_CRMACCMANAG: `${APIV4}/customer/save`,
    GET_ACCOUNT: `${APIV4}/account/list`,
    UPDATA_ACCOUNT: `${APIV4}/account/save`,
    UPDATA_STATUS_ACCOUNT: `${APIV4}/account/status/update`,
    DEL_INDUSTRY: `${APIV4}/industry/delete`,
    UPDATE_INDUSTRY: `${APIV4}/industry/save`,
    //crm平台
    GET_CRM_ACCOUNT: `${CRMAPI}/account/list`,
    UPDATE_CRM_ACCOUNT: `${CRMAPI}/account/save`,
    UPDATE_CRM_ACCOUNT_STATUS: `${CRMAPI}/account/status/update`,
    GET_CRM_ACCOUNT_DETAIL: `${CRMAPI}/account/detail/get/{accountId}`,
    //account: `${APIV1}/account`,
  },
}