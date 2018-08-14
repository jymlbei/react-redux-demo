

export function getRedirectPath({type,avator}) {
    // 根据用户信息跳转地址
    let url = (type === 'login') ? '':'/userInfo'
    return url
}
