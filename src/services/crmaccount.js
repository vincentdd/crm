import {
  request,
  config
} from 'utils'

const {
  api
} = config
const {
  user,
  GET_CRM_ACCOUNT,
  UPDATE_CRM_ACCOUNT,
  UPDATE_CRM_ACCOUNT_STATUS,
  GET_CRM_ACCOUNT_DETAIL,
} = api

export async function query(params) {
  return request({
    url: GET_CRM_ACCOUNT,
    method: 'post',
    data: params,
  })
}

export async function detail(id) {
  return request({
    url: GET_CRM_ACCOUNT_DETAIL.replace('{accountId}', id),
    method: 'post',
  })
}

export async function remove(params) {
  return request({
    url: user,
    method: 'post',
    data: params,
  })
}

export async function update_status(params){
  return request({
    url: UPDATE_CRM_ACCOUNT_STATUS,
    method: 'post',
    data: params,
  })
}

export async function update(params) {
  return request({
    url: UPDATE_CRM_ACCOUNT,
    method: 'post',
    data: params,
  })
}

export async function create(params) {
  return request({
    url: UPDATE_CRM_ACCOUNT,
    method: 'post',
    data: params,
  })
}
