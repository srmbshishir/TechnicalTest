using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BEL;
using BLL;

namespace CrudSample.Controllers
{
    public class UserController : ApiController
    {
        [Route("api/users")]
        [HttpPost]
        public UserModel AddUser(UserModel user)
        {
            user.created_at = DateTime.Now.Date;
            return UserService.AddUser(user);
        }

        [Route("api/Login")]
        [HttpPost]
        public UserModel Login(UserModel user)
        {
            if (user == null)
            {
                return null;
            }
            return UserService.GetUserlogin(user.email, user.password);
        }

        [Route("api/users")]
        [HttpGet]
        public List<UserModel> GetAllUsers()
        {
            return UserService.GetAllUsers();
        }

        [Route("api/users/{id}")]
        [HttpGet]
        public UserModel GetUser(int id)
        {
            return UserService.GetUser(id);
        }

        [Route("api/users/{id}")]
        [HttpPut]
        public void EditUser(UserModel usr,int id)
        {
            UserService.EditUser(usr,id);
        }
        [Route("api/users/{id}")]
        [HttpDelete]
        public UserModel DeleteUser(int id)
        {
            return UserService.DeleteUser(id);
        }

        [Route("api/trash")]
        [HttpGet]
        public List<UserModel> GetDeletedUsers()
        {
            return UserService.GetDeletedUsers();
        }

        [Route("api/recover/{id}")]
        [HttpPut]
        public void Recover(int id)
        {
            UserService.Recover(id);
        }

    }
}
