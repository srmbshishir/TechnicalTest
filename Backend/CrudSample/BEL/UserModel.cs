using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BEL
{
    public class UserModel
    {
        public int id { get; set; }
        public string name { get; set; }
        public string dept { get; set; }
        public Nullable<double> salary { get; set; }
        public Nullable<System.DateTime> created_at { get; set; }
        public Nullable<System.DateTime> edited_at { get; set; }
        public Nullable<System.DateTime> deleted_at { get; set; }
        public Nullable<System.DateTime> recovered_at { get; set; }
        public string trash { get; set; }
    }
}
