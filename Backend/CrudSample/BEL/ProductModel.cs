using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BEL
{
    public class ProductModel
    {
        public int id { get; set; }
        public string name { get; set; }
        public string category { get; set; }
        public Nullable<double> price { get; set; }
        public Nullable<System.DateTime> created_at { get; set; }
        public Nullable<System.DateTime> edited_at { get; set; }
        public Nullable<System.DateTime> deleted_at { get; set; }
        public Nullable<System.DateTime> recovered_at { get; set; }
        public string trash { get; set; }
    }
}
