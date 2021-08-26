using System;
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
    }
}
