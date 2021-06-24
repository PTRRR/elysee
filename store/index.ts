type StateType = {
  showMenu: boolean
}

export const state = (): StateType => ({
  showMenu: false,
})

export const getters = {
  showMenu(state: StateType) {
    return state.showMenu
  },
}

export const mutations = {
  setShowMenu(state: StateType, show: boolean) {
    state.showMenu = show
  },
}
