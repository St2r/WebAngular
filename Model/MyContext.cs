﻿using Microsoft.EntityFrameworkCore;
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
            optionBuilder.UseSqlServer("Server=39.96.47.215,1433;Database=BBSSystem;Trusted_Connection=False;MultipleActiveResultSets=true;User Id=SA;Password=123456_aA");
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
        public DbSet<Block> Blocks { get; set; }
        public DbSet<PersonToBlock> PersonToBlocks { get; set; }
    }
}
