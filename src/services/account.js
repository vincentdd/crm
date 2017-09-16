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
    debugger;
    return request({
        url: account,
        method: 'get',
        data: params,
    })
}

export async function querylist(params = {}) {
  console.log(params);
  debugger;
  return axios({
    url: account,
    method: 'post',
    data: params,
    params: {pageNo: 1},
    headers: {'Content-Type':'application/json;charset=UTF-8'},
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
