export interface loginFormDataType { 
    action: string,
    email: string | null,
    password:string | null
}

export interface FetchLoginDataResponseType {
  userName: string
  roles: string
  access_token: string
  expires_in: number
}