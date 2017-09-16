const Mock = require('mockjs')
const config = require('../utils/config')

const {
    apiPrefix
} = config

const crmaccmanag = Mock.mock({
    'data|100': [{
        companyName: '@title',
        industryName: '@word',
        contactor: '@first @last',
        contatorEmail: '@email',
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
        customerId: '@id',
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
        newData.customerId = Mock.mock('@id')
        database.unshift(newData)

        res.status(200).end()
    },

    [`GET ${apiPrefix}/crmaccmanag/:customerId`](req, res) {
        const {
            customerId
        } = req.params
        const data = queryArray(database, customerId, 'customerId')
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json(NOTFOUND)
        }
    },

    [`DELETE ${apiPrefix}/crmaccmanag/:customerId`](req, res) {
        const {
            customerId
        } = req.params
        const data = queryArray(database, customercustomerId, 'customercustomerId')
        if (data) {
            database = database.filter(item => item.customerId !== customerId)
            res.status(204).end()
        } else {
            res.status(404).json(NOTFOUND)
        }
    },
    [`PATCH ${apiPrefix}/crmaccmanag/:customerId`](req, res) {
        const {
            customerId
        } = req.params
        const editItem = req.body
        let isExist = false

        database = database.map((item) => {
            if (item.customerId === customerId) {
                isExist = true
                return Object.assign({}, item, editItem)
            }
            return item
        })

        if (isExist) {
            res.status(201).end()
        } else {
            res.status(404).json(NOTFOUND)
        }
    },
}