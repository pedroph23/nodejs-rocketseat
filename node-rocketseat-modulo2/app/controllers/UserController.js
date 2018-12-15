const { User } = require("../models");
const userDto = require("../models/dto/UserDTO");

class UserController {
  constructor() {}
  create(req, res) {
    return res.render("auth/signup.njk");
  }

  async store(req, res) {
    try {
      res.send(await User.create(req.body));
    } catch (e) {
      console.trace(e);
    }
  }

  async getAll(req, res) {
    try {
      const users = await User.findAll();
      const dto = userDto.listUsersDTO(users);
      return res.json(dto);
    } catch (e) {
      console.trace(e);
    }
  }

  async findOne(req, res) {
    const { id } = req.params;
    try {
      console.log(req.params);
      console.log(req.body.update);
      return res.json(await User.findByPk(id));
    } catch (e) {
      console.trace(e);
    }
  }

  async update(req, res) {
    try {
      const result = await User.update(req.body, {
        where: { id: req.params.id }
      });
      return res.json(result);
    } catch (e) {
      console.trace(e);
    }
  }

  async delete(req, res) {
    try {
      const result = await User.destroy({
        where: { id: req.params.id }
      });
      return res.json(result);
    } catch (e) {
      console.trace(e);
    }
  }
}
module.exports = new UserController();
