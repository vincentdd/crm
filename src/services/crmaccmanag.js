import {
  request,
  config
} from 'utils'

const {
  api
} = config
const {
  crmaccmanag
} = api

export async function query(params) {
  return request({
    url: crmaccmanag,
    method: 'post',
    data: params,
  })
}

export async function create(params) {
  return request({
    url: crmaccmanag.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export async function update(params) {
  return request({
    url: crmaccmanag,
    method: 'patch',
    data: params,
  })
}