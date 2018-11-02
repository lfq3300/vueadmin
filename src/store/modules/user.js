import { setToken, getToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    userdata: '',
    roles: false,
    testData: [
      {
        cardtype: 'times',
        chname: '时间卡',
        effective: -3
      },
      {
        cardtype: 'number',
        chname: '次卡',
        effective: -4
      }
    ]
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_TESTDATA: (state, data) => {
      state.testData = data
    }
  },
  actions: {
    
  }
}

export default user
