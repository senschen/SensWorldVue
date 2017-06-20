export default {
    // 设置是否登录
    SET_COUNT (state, platform) {
        state.count = (platform);
    },
    SET_LOADED (state, platform) {
        state.loaded = (platform);
    },
    SET_MUSIC (state, platform) {
        state.playmusic = (platform);
    },
    SET_STEP (state, platform) {
        state.step = (platform);
    }
};
