const users: { [k: string]: string } = {
  User_list: 'id email verfied suspended postsCount createdAt',
  User: 'id email verfied suspended postsCount createdAt',
  update_User: 'id suspended',
  UserPosts: 'id createdAt updatedAt title content published viewCount authorId',
}

const Fileds: { [k: string]: string } = {
  ...users,
}

export default Fileds
