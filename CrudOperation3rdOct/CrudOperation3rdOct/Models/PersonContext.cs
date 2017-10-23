using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CrudOperation3rdOct.Controllers
{
    public class PersonContext : DbContext
    {
        public PersonContext() : base("name=PersonContext")
        {

        }
        public DbSet<Person> PersonList
        {
            get; set;
        }
    }
}