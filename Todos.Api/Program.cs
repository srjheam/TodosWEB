using Microsoft.EntityFrameworkCore;
using Todos.Api.Data;
using Todos.Api.Models;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("Todos") ?? "Data Source=Todos.db";

builder.Services.AddSqlite<TodosContext>(connectionString);

var app = builder.Build();

app.MapGet("/todos", async (TodosContext db) => await db.Todos.ToListAsync());
app.MapPost("/todos", async (TodosContext db, Todo todo) =>
{
    await db.Todos.AddAsync(todo);
    await db.SaveChangesAsync();
    return Results.Created($"/todos/{todo.Id}", todo);
});
app.MapGet("/todos/{id}", async (TodosContext db, int id) => await db.Todos.FindAsync(id));
app.MapPut("/todos/{id}", async (TodosContext db, Todo updateTodo, int id) =>
{
    var todo = await db.Todos.FindAsync(id);
    if (todo is null) return Results.NotFound();
    todo.Title = updateTodo.Title;
    todo.IsCompleted = updateTodo.IsCompleted;
    await db.SaveChangesAsync();
    return Results.NoContent();
});
app.MapDelete("/todos/{id}", async (TodosContext db, int id) =>
{
  var todo = await db.Todos.FindAsync(id);
  if (todo is null) return Results.NotFound();
  db.Todos.Remove(todo);
  await db.SaveChangesAsync();
  return Results.Ok();
});

app.Run();
