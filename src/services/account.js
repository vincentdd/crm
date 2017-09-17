import {
    request,
    config
} from 'utils'

import axios from 'axios'
const {
    api
} = config
const {
    account
} = api

export async function query(params) {
    return request({
        url: account,
        method: 'post',
        data: params,
        params: params,
    })
}

export async function create(params) {
    return request({
        url: account.replace('/:id', ''),
        method: 'post',
        data: params,
    })
}

export async function update(params) {
    return request({
        url: account,
        method: 'patch',
        data: params,
    })
}
