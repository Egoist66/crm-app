export default defineNuxtRouteMiddleware((to, from) => {

  account.get()
  .then(user => {
    if(user.status && (to.path === '/login' || to.path === '/register')) {
      navigateTo('/')

    }
    else {
      navigateTo('/login')
    }
  })

 
  
});