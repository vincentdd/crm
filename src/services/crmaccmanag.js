import {
  request,
  config
} from 'utils'

const {
  api
} = config
const {
  GET_CRMACCMANAG,
  UPDATA_CRMACCMANAG
} = api

export async function query(params) {
  return request({
    url: GET_CRMACCMANAG,
    method: 'post',
    data: {pageNo: 1, content: ''},
  })
}

export async function create(params) {
  return request({
    url: GET_CRMACCMANAG.replace('/:customerId', ''),
    method: 'post',
    data: params,
  })
}

export async function update(params) {
  return request({
    url: UPDATA_CRMACCMANAG,
    method: 'patch',
    data: params,
  })
}
