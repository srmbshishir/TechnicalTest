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
    public class ProductController : ApiController
    {
        [Route("api/products")]
        [HttpPost]
        public ProductModel AddProduct(ProductModel pr)
        {
            pr.created_at = DateTime.Now.Date;
            return ProductService.AddProduct(pr);
        }
        [Route("api/products")]
        [HttpGet]
        public List<ProductModel> GetAllProducts()
        {
            return ProductService.GetAllProducts();
        }

        [Route("api/products/{id}")]
        [HttpGet]
        public ProductModel GetProduct(int id)
        {
            return ProductService.GetProduct(id);
        }
        [Route("api/products/{id}")]
        [HttpPut]
        public void EditProduct(ProductModel pr, int id)
        {
            ProductService.EditProduct(pr, id);
        }
        [Route("api/products/{id}")]
        [HttpDelete]
        public ProductModel DeleteProduct(int id)
        {
            return ProductService.DeleteProduct(id);
        }
        [Route("api/producttrash")]
        [HttpGet]
        public List<ProductModel> GetDeletedProducts()
        {
            return ProductService.GetDeletedProducts();
        }

        [Route("api/productrecover/{id}")]
        [HttpPut]
        public void Recover(int id)
        {
            ProductService.Recover(id);
        }
    }
}
