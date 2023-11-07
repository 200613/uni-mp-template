// declare type LoginResult = {
//   /** 用户id */
//   id: number
//   /** 头像 */
//   avatar: string
//   /** 账户名 */
//   account: string
//   /** 昵称 */
//   nickname: string
//   /** 手机号 */
//   mobile: string
//   /** 登录凭证 */
//   token: string
// }

// declare type LoginParams = {
//   code: string
// }
declare type LoginResult = {
  id: number
  avator: string
  account: string
  nickname?: string
  mobile: string
  token: string
}
declare type LoginParams = {
  code: StorageManager
}
