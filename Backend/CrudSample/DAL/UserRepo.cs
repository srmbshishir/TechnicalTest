using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class UserRepo
    {
        static SingularityLimitedEntities context;
        static UserRepo()
        {
            context = new SingularityLimitedEntities();
        }
        public static User AddUser(User u)
        {
            context.Users.Add(u);
            context.SaveChanges();
            return u;
        }

        public static User GetUserLogin(string mail, string pass)
        {
            var usercheck = context.Users.FirstOrDefault(e => e.email == mail && e.password == pass);
            if (usercheck != null)
            {
                return usercheck;
            }
            return null;
        }
    }
}
