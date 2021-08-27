﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BEL;
using DAL;

namespace BLL
{
    public class UserService
    {
        public static UserModel AddUser(UserModel user)
        {
            var u = AutoMapper.Mapper.Map<UserModel, User>(user);
            var data = UserRepo.AddUser(u);
            return AutoMapper.Mapper.Map<User, UserModel>(data);
        }

        public static UserModel GetUserlogin(string mail, string pass)
        {
            var users = UserRepo.GetUserLogin(mail, pass);
            return AutoMapper.Mapper.Map<User, UserModel>((User)users);
        }

        public static List<UserModel> GetAllUsers()
        {
            var users = UserRepo.GetAllUsers();
            return AutoMapper.Mapper.Map<List<User>, List<UserModel>>(users);
        }

        public static UserModel GetUser(int id)
        {
            var user = UserRepo.GetUser(id);
            return AutoMapper.Mapper.Map<User, UserModel>(user);
        }
        public static void EditUser(UserModel usr, int id)
        {
            var data = AutoMapper.Mapper.Map<UserModel, User>(usr);
            //var d = new Department() { Id = dept.Id, Name = dept.Name };
            UserRepo.EditUser(data, id);
        }
        public static UserModel DeleteUser(int id)
        {
            var user = UserRepo.DeleteUser(id);
            return AutoMapper.Mapper.Map<User, UserModel>(user);
        }
    }
}
