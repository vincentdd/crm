import {
  request,
  config
} from 'utils'

const {
  api
} = config
const {
  employee
} = api

// export async function query(params) {
//   return request({
//     url: employee,
//     method: 'get',
//     data: params,
//   })
// }

export async function create(params) {
  return request({
    url: employee.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export async function remove(params) {
  return request({
    url: employee,
    method: 'delete',
    data: params,
  })
}

export async function update(params) {
  return request({
    url: employee,
    method: 'patch',
    data: params,
  })
}

export async function query(params) {
  return request({
    url: employee,
    method: 'get',
    data: params,
  })
}