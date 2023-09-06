import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import { getCookie, setCookie } from 'typescript-cookie'


declare global {
  interface Window {
    Pusher: any;
    Echo: any;
  }
}


export default defineNuxtPlugin(() => {

  const token = getCookie('token')

  window.Pusher = Pusher
  window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '0edfcd3859d04692ce62',
    wsHost: '127.0.0.1',
    wsPort: 6001,
    cluster: 'ap1',
    forceTLS: false,
    disableStats: true,
    authEndpoint: import.meta.env.VITE_API_BASE_URL + '/api/broadcasting/auth',
    auth: {
      headers: {
        Authorization: 'Bearer ' + token,
      }
    },

    // broadcaster: 'pusher',
    // authModule: true,
    // connectOnLogin: true,
    // authEndpoint: import.meta.env.VITE_API_BASE_URL + '/api/broadcasting/auth',
    // key: '0edfcd3859d04692ce62',
    // wsHost: '127.0.0.1',
    // wsPort: 6001,
    // cluster: 'ap1',
    // encrypted: true,
    // disableStats: true,


  })
})  