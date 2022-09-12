const users: { [k: string]: string } = {
  User_list: 'id email verfied suspended postsCount createdAt Type',
  User: 'id email verfied suspended postsCount createdAt Type',
  update_User: 'id suspended',
  UserPosts: 'id createdAt updatedAt title content published viewCount authorId',
}

const companies: { [k: string]: string } = {
  Companies_list: 'id email name suspended createdAt',
  Companies: 'id email suspended createdAt',
  create_Companies: 'id email name',
}

const Fileds: { [k: string]: string } = {
  ...users,
  ...companies,
}

export default Fileds
