import {
    request,
    config
} from 'utils'

const {
    api
} = config
const {
    GET_ACCOUNT,
    UPDATA_ACCOUNT
} = api

export async function query(params) {
    return request({
        url: GET_ACCOUNT,
        method: 'post',
        data: params,
    })
}

export async function create(params) {
    return request({
        url: GET_ACCOUNT.replace('/:id', ''),
        method: 'post',
        data: params,
    })
}

export async function update(params) {
    return request({
        url: UPDATA_ACCOUNT,
        method: 'post',
        data: params,
    })
}
