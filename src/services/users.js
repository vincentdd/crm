import {
  request,
  config
} from 'utils'

const {
  api
} = config
const {
  users
} = api

export async function query(params) {
  //  debugger;
>>>>>>> 2bfa38b262b144c87c0ee42057abb9b4a2002921
  return request({
    url: users,
    method: 'get',
    data: params,
  })
}

export async function remove(params) {
  return request({
    url: users,
    method: 'delete',
    data: params,
  })
}