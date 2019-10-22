import store from '../store/store'

export default (to, from, next) => {
        // eslint-disable-next-line
        console.log(store.state.user)
    if(from && to && from.name && to.name && to.name === from.name) {
        return next(false)
    }
    if(store.state.user.loggedIn) {
        switch(to.name) {
            case 'login':
            case 'logout':
            case 'register':
            case 'home':
                return next({ name: 'dashboard' })
        }
    } else {
        store.dispatch('user/reauth').then(authRes => {
            if(authRes.success) {
                switch(to.name) {
                    case 'login':
                    case 'logout':
                    case 'register':
                    case 'home':
                        return next({ name: 'dashboard' })
                }
            } else {
                switch(to.name) {
                    case 'dashboard':
                    case 'account':
                    case 'tasks':
                    case 'tasksMove':
                        return next({ name: 'login' })
                }
            }
        })
    }

    return next()
}