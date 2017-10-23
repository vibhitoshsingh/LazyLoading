using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace CrudOperation3rdOct.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class CrudController : ApiController
    {
        PersonContext db = new PersonContext();
        // GET: api/Crud
        public IHttpActionResult  Get()
        {
            var p = db.PersonList.ToList();
            return Ok(p);
        }

        // GET: api/Crud/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Crud
        public IHttpActionResult Post(Person value)
        {
            db.PersonList.Add(value);
            db.SaveChanges();
            return Ok("Ok");
        }

        // PUT: api/Crud/5
        public IHttpActionResult Put(Person value)
        {
            
            var res=  db.PersonList.Find(value.Id);
            res.Name = value.Name;
            res.Phone = value.Phone;
            res.Email = value.Email;
            res.Address = value.Address;
            res.State = value.State;
            res.City = value.City;

            db.SaveChanges();
            return Ok("Ok");

            
        }

        // DELETE: api/Crud/5
        public IHttpActionResult Delete(int id)
        {
           var res= db.PersonList.Find(id);
            db.PersonList.Remove(res);
            db.SaveChanges();
            return Ok("ok");

        }
    }
}
