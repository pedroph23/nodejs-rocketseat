class UserDTO {
  constructor() {}

  listUsersDTO(users) {
    const dto = [];
    users.forEach(user => {
      dto.push({
        id: user["id"],
        name: user["name"],
        email: user["email"]
      });
    });
    return dto;
  }
}
module.exports = new UserDTO();
