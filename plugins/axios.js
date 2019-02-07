export default function ({ $axios, redirect, store, app }) {
  $axios.onRequest(config => {
    config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;application/json'
    console.log('Api request made from axios.')
    // if (store.state.authToken) {
    //   config.headers.common['Authorization'] = store.state.authToken
    // }
    // config.headers.common['Accept-Language'] = app.i18n.locale
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 404) {
      redirect('/404')
    } else if (code === 403) {
      redirect('/403')
    } if (code === 500) {
      redirect('/500')
    } else if (code === 401) {
      redirect('/account/login')
    }
  })
}

// import resources  from '../api/resources'
//
// export default function(ctx, inject) {
// if (!ctx.$axios) {
//     console.error( 'Please make sure $axios module is added');
//   } else {
//     resources = ctx.$axios
//     inject('resources', resources)
//   }
// }
