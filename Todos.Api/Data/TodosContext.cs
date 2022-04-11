using Microsoft.EntityFrameworkCore;
using Todos.Api.Models;

namespace Todos.Api.Data {
    class TodosContext : DbContext
    {
        public TodosContext(DbContextOptions options) : base(options) { }
        public DbSet<Todo> Todos { get; set; }
    }
}