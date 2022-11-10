import { Direct } from '~~/utils/interfaces'

export const publicList: Array<Direct> = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Login/SignUp', path: '/guest/auth' },
] 

export const privateList: Array<Direct> = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Users', path: '/user/users' },
    { id: 3, title: 'Info', path: '/user/info' }, 
]
