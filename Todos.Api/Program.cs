using Microsoft.EntityFrameworkCore;
using Todos.Api.Data;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("Todos") ?? "Data Source=Todos.db";

builder.Services.AddSqlite<TodosContext>(connectionString);

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();
