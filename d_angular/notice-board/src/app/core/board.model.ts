export class BoardElement {
  title: string;
  uuid: string;
  id: number;
  user: string;
  date: string;
  contents: string;
}

export class CommentElement {
  uuid: string;
  boardUuid: string;
  user: string;
  date: string;
  contents: string;
}