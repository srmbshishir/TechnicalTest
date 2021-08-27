using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class ProductRepo
    {
        static SingularityLimitedEntities context;
        static ProductRepo()
        {
            context = new SingularityLimitedEntities();
        }
        public static Product AddProduct(Product pr)
        {
            context.Products.Add(pr);
            context.SaveChanges();
            return pr;
        }
        public static List<Product> GetAllProducts()
        {
            var list = (from p in context.Products
                        where p.trash != "YES"
                        select p).ToList();
            return list;
        }
        public static Product GetProduct(int id)
        {
            return context.Products.FirstOrDefault(e => e.id == id);
        }
        public static void EditProduct(Product u, int id)
        {
            var oldp = context.Products.FirstOrDefault(e => e.id == id);
            oldp.name = u.name;
            oldp.category = u.category;
            oldp.price = u.price;
            oldp.edited_at = DateTime.Now.Date;
            context.SaveChanges();
        }
        public static Product DeleteProduct(int id)
        {
            var pr = context.Products.FirstOrDefault(e => e.id == id);
            pr.trash = "YES";
            pr.deleted_at = DateTime.Now.Date;
            context.SaveChanges();
            return pr;
        }
        public static List<Product> GetDeletedProducts()
        {
            var list = (from p in context.Products
                        where p.trash == "YES"
                        select p).ToList();
            return list;
        }
        public static void Recover(int id)
        {
            var oldp = context.Products.FirstOrDefault(e => e.id == id);
            oldp.trash = "NULL";
            oldp.recovered_at = DateTime.Now.Date;
            context.SaveChanges();
        }
    }
}
