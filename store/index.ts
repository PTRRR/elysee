type StateType = {
  showMenu: boolean
  showTopBar: boolean
}

export const state = (): StateType => ({
  showMenu: false,
  showTopBar: true,
})

export const getters = {
  showMenu(state: StateType) {
    return state.showMenu
  },

  showTopBar(state: StateType) {
    return state.showTopBar
  },
}

export const mutations = {
  setShowMenu(state: StateType, show: boolean) {
    state.showMenu = show
  },

  setShowTopBar(state: StateType, show: boolean) {
    state.showTopBar = show
  },
}
