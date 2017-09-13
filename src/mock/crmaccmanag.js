const Mock = require('mockjs')
const config = require('../utils/config')

const {
  apiPrefix
} = config

const crmaccmanag = Mock.mock({
  'data|100': [{
    customerId: '@id',
    companyName: '@title',
    industryName: '@word',
    contactor: '@first @last',
    contatorEmail: '@word',
    contactPhone: '@word',
    createTime: '@dateTime',
    validPeriod: '@dateTime',
    // [{
    //   moment: '@dateTime'
    // }, {
    //   moment: '@dateTime'
    // }],
    'limitAcctNum|10-200': 1,
    'status': '@boolean',
  }]
})

let database = crmaccmanag.data

module.exports = {

  [`GET ${apiPrefix}/crmaccmanag`](req, res) {
    const {
      query
    } = req
    let {
      pageSize,
      page,
      ...other
    } = query
    pageSize = pageSize || 10
    page = page || 1

    let newData = database
    for (let key in other) {
      if ({}.hasOwnProperty.call(other, key)) {
        newData = newData.filter((item) => {
          if ({}.hasOwnProperty.call(item, key)) {
            if (key === 'address') {
              return other[key].every(iitem => item[key].indexOf(iitem) > -1)
            } else if (key === 'createTime') {
              const start = new Date(other[key][0]).getTime()
              const end = new Date(other[key][1]).getTime()
              const now = new Date(item[key]).getTime()

              if (start && end) {
                return now >= start && now <= end
              }
              return true
            }
            return String(item[key]).trim().indexOf(decodeURI(other[key]).trim()) > -1
          }
          return true
        })
      }
    }

    res.status(200).json({
      data: newData.slice((page - 1) * pageSize, page * pageSize),
      total: newData.length,
    })
  },

  [`POST ${apiPrefix}/crmaccmanag`](req, res) {
    const newData = req.body
    newData.createTime = Mock.mock('@now')
    newData.id = Mock.mock('@id')
    database.unshift(newData)

    res.status(200).end()
  },
}