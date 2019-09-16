// import ajaxAmd from '../../assets/common/axios'
import ajaxAmd from '@ajax'

// 获取设备组内容
export async function deviceGroupaddparmas () {
  debugger
  return ajaxAmd.get({
    url: '/deviceGroup/add/parmas'
  })
}
// 发送邮件
export async function sendMailbox (params) {
  return ajaxAmd.get({
    url: '/sendRegisterMail',
    params
  })
}
