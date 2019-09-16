import ajaxAmd from '../../assets/axios/axios'

// 获取设备组内容
export async function  deviceGroupaddparmas () {
  return ajaxAmd.get({
    url: '/deviceGroup/add/parmas'
  })
}
