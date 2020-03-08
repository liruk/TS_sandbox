export interface RootState {
  version: string;
}

export interface BCDicesState {
  bcdices: BCDice[];
}

export interface BCDice {
  // 一意になるかんじのID
  id: string;
  // 答えが帰ってきたか
  done: boolean;
  // コマンドとレスポンス
  system: string;
  command: string;
  response: string;
}