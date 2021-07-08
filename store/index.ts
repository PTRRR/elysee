type StateType = {
  showMenu: boolean
  showTopBar: boolean
  imageOverlay: string
  showImageOverlay: boolean
}

export const state = (): StateType => ({
  showMenu: false,
  showTopBar: true,
  imageOverlay: '',
  showImageOverlay: false,
})

export const getters = {
  showMenu(state: StateType) {
    return state.showMenu
  },

  showTopBar(state: StateType) {
    return state.showTopBar
  },

  showImageOverlay(state: StateType) {
    return state.showImageOverlay
  },

  imageOverlay(state: StateType) {
    return state.imageOverlay
  },
}

export const mutations = {
  setShowMenu(state: StateType, show: boolean) {
    state.showMenu = show
  },

  setShowTopBar(state: StateType, show: boolean) {
    state.showTopBar = show
  },

  setImageOverlay(state: StateType, imageOverlay: string) {
    state.imageOverlay = imageOverlay
  },

  setShowImageOverlay(state: StateType, show: boolean) {
    state.showImageOverlay = show
  },
}
