import Api from '../api'
// import {getRedirectPath} from '../until'
const AUTHSUCCESS = 'AUTHSUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const CLEAR_TIPS = 'CLEAR_TIPS'
const utils = require('utility')

const initState = {
    redirectTo:''
}

export function user(state=initState,action){
    switch (action.type) {
        case AUTHSUCCESS:
            return {...state,msg:'',...action.payload,redirectTo:'/index'}
        case ERROR_MSG:
            return {...state,msg:action.msg}
        case CLEAR_TIPS:
            return {...state,msg:''}
        default:
            return state
    }
}

export function authSuccess(data){
    return { type:AUTHSUCCESS,payload:data}
}

function errorMsg(msg){
    return {msg,type:ERROR_MSG}
}

export function clearTips(){
    return {type:CLEAR_TIPS}
}

export function login({userName,password}){
    if(!userName||!password){
        return errorMsg('用户名密码必输入')
    }
    return dispatch=>{
        Api.login({userName,password:utils.md5(password)}).then(res=>{
            if(res.rtnCode==="00000000"){
                dispatch(authSuccess(res.bizData))
            }else{
                dispatch(errorMsg(res.msg))
            }
        })
    }
}

