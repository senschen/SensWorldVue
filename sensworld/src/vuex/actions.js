export default {
    // 改变是否登录状态
    setCount ({commit}, platform) {
        commit('SET_COUNT', platform);
    },
    setLoaded ({commit}, platform) {
        commit('SET_LOADED', platform);
    },
    setMusic ({commit}, platform) {
        commit('SET_MUSIC', platform);
    },
    setStep ({commit}, platform) {
        commit('SET_STEP', platform);
    }
};
