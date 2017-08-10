const size: GameReducer<'size'> = (state, action, fullState) => ({
    RESIZE: () => (action as ResizeAction).size
});

export default size;
