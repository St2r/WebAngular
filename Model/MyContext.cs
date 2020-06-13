using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngular.Model
{
    public class MyContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDb;Database=BBSSystem;Trusted_connection=True;");
            base.OnConfiguring(optionBuilder);
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Article> Articles { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Focus> Foci { get; set; }
        public DbSet<LikeArticle> LikeArticles { get; set; }
        public DbSet<LikeComment> LikeComments { get; set; }
        public DbSet<Collection> Collections { get; set; }
        public DbSet<ArticleToTag> ArticleToTags { get;  set; }
        public DbSet<Tag> Tags { get; set; }
    }
}
