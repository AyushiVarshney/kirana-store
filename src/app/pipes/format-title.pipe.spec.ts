import { UserTitlePipe } from './format-title-pipe';

describe('UserTitlePipe', () => {
  it('create an instance', () => {
    const pipe = new UserTitlePipe();
    expect(pipe).toBeTruthy();
  });
});
