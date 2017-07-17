export default {
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
