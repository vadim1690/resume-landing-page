using ResumeApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Add memory cache for better performance
builder.Services.AddMemoryCache();

// Register our services
builder.Services.AddSingleton<ResumeDataService>();

// Add CORS with a more permissive policy for development
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        // More permissive CORS policy that works with any frontend
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// Use CORS - this needs to be called before other middleware
app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.MapControllers();

app.Run();
