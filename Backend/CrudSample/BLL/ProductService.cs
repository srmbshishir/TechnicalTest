using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BEL;
using DAL;

namespace BLL
{
    public class ProductService
    {
        public static ProductModel AddProduct(ProductModel pr)
        {
            var u = AutoMapper.Mapper.Map<ProductModel, Product>(pr);
            var data = ProductRepo.AddProduct(u);
            return AutoMapper.Mapper.Map<Product, ProductModel>(data);
        }
        public static List<ProductModel> GetAllProducts()
        {
            var pr = ProductRepo.GetAllProducts();
            return AutoMapper.Mapper.Map<List<Product>, List<ProductModel>>(pr);
        }
        public static ProductModel GetProduct(int id)
        {
            var pr = ProductRepo.GetProduct(id);
            return AutoMapper.Mapper.Map<Product, ProductModel>(pr);
        }
        public static void EditProduct(ProductModel pr, int id)
        {
            var data = AutoMapper.Mapper.Map<ProductModel, Product>(pr);
            //var d = new Department() { Id = dept.Id, Name = dept.Name };
            ProductRepo.EditProduct(data, id);
        }
        public static ProductModel DeleteProduct(int id)
        {
            var pr = ProductRepo.DeleteProduct(id);
            return AutoMapper.Mapper.Map<Product, ProductModel>(pr);
        }
        public static List<ProductModel> GetDeletedProducts()
        {
            var pr = ProductRepo.GetDeletedProducts();
            return AutoMapper.Mapper.Map<List<Product>, List<ProductModel>>(pr);
        }
        public static void Recover(int id)
        {
            ProductRepo.Recover(id);
        }
    }
}
