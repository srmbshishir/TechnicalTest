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
        public static List<User> GetAllUsers()
        {
            var list = (from p in context.Users
                          where p.trash!="YES"
                          select p).ToList();
            return list;
        }

        public static User GetUser(int id)
        {
            return context.Users.FirstOrDefault(e => e.id == id);
        }
        public static void EditUser(User u,int id)
        {
            var oldp = context.Users.FirstOrDefault(e => e.id == id);
            oldp.name = u.name;
            oldp.email = u.email;
            oldp.dept = u.dept;
            oldp.salary = u.salary;
            oldp.edited_at = DateTime.Now.Date;
            context.SaveChanges();
        }
        public static User DeleteUser(int id)
        {
            var user = context.Users.FirstOrDefault(e => e.id == id);
            user.trash = "YES";
            context.SaveChanges();
            return user;
        }
    }
}
