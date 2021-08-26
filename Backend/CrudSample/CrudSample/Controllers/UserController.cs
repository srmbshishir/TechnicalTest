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
            user.created_at = DateTime.Now;
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
    }
}
