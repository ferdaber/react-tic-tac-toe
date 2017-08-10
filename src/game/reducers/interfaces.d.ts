type GameReducer<P extends keyof GameState> = ((
    state: GameState[P],
    action: GameAction,
    fullState: GameState
) => { [A in GameActionType]?: () => GameState[P] });
