export default {
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
